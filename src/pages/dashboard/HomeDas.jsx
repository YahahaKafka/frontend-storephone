import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Typography, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomeDas = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(URL_PRODUCT)
      .then((res) => {
        console.log("res", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to fetch products");
      });
  }, []);

  const handleAddToCart = (product) => {
    message.success(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Product List</Title>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={8} key={product._id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.thumbnail} />}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <p>Price: Rp {product.price}</p>
                    <p>RAM: {product.ram}</p>
                  </>
                }
              />
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                style={{ marginTop: "10px" }}
                onClick={() => handleAddToCart(product)}
              >
                <Link
                  to={`/checkout/${product._id}`}
                  style={{ color: "white" }}
                >
                  Checkout Now
                </Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeDas;
