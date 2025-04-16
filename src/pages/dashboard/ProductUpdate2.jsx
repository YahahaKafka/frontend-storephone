import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL_PRODUCT}/${id}`)
      .then((res) => {
        setProduct(res.data);
        form.setFieldsValue({
          name: res.data.name,
          price: res.data.price,
        });

        if (res.data.thumbnail) {
          setFileList([
            {
              uid: "-1",
              name: "thumbnail.png",
              status: "done",
              url: res.data.thumbnail,
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, form]);

  const handleSubmit = async (values) => {
    setLoading(true);
    const data = new FormData();
    data.append("name", values.name);
    data.append("price", values.price);

    if (values.thumbnail && values.thumbnail[0]?.originFileObj) {
      data.append("thumbnail", values.thumbnail[0].originFileObj);
    }

    try {
      await axios.patch(`${URL_PRODUCT}/${id}`, data);
      message.success("Product updated successfully!");
      form.resetFields();
      setFileList([]);
      navigate("/dashboard/productdas");
    } catch (error) {
      message.error("Failed to update product.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div>
      <h1>Edit Product</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ category: "electronics" }}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <Input type="number" placeholder="Enter product price" />
        </Form.Item>

        <Form.Item
          name="thumbnail"
          label="Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList}
        >
          {product && product.thumbnail && (
            <p>
              Current:{" "}
              <a href={product.thumbnail} target="_blank" rel="noreferrer">
                {product.thumbnail}
              </a>
            </p>
          )}
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Edit Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
