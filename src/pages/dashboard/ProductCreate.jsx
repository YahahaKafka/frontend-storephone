import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    const data = new FormData();
    data.append("name", values.name);
    data.append("price", values.price);
    data.append("thumbnail", values.thumbnail[0].originFileObj);

    try {
      await axios.post(URL_PRODUCT, data);
      message.success("Product added successfully!");
      form.resetFields();
      setFileList([]);
      navigate("/dashboard/productdas");
    } catch (error) {
      message.error("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div>
      <h1>Add Product</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          category: "electronics", // Menentukan kategori default (optional, belum dipakai)
        }}
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
          rules={[{ required: true, message: "Please upload a thumbnail!" }]}
        >
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false} // Menghindari upload otomatis
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
