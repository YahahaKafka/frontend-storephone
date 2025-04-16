import React, { useEffect, useState } from "react";
import { Table, Button, Image } from "antd";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { Link } from "react-router-dom";

const ProductDas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_PRODUCT)
      .then((res) => {
        console.log("res", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${URL_PRODUCT}/${id}`)
      .then((res) => {
        console.log(res);
        // Refresh tanpa reload full page
        setProducts((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("err", err));
  };

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (_, record) => (
        <Image src={record?.thumbnail} width={100} loading="lazy" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Link to={`/dashboard/productdas/${record?._id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record?._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1>List Product</h1>
      <Link to="/dashboard/productdas/create">
        <Button type="primary" style={{ marginBottom: "16px" }}>
          Tambah
        </Button>
      </Link>
      <Table
        dataSource={products}
        columns={columns}
        loading={loading}
        rowKey="_id"
      />
    </div>
  );
};

export default ProductDas;
