import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Button,
  Input,
  Form,
  Col,
  Row,
  Divider,
  message,
  Select,
} from "antd";
import { axiosInstance } from "../../util/axios";

const DetailCheckout = ({
  selectedColor,
  selectedRam,
  selectedRom,
  activeimage,
  stock,
  price,
}) => {
  const [midtransUrl, setMidtransUrl] = useState("");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCheckout = (values) => {
    setLoading(true);
    console.log("values", values);
    console.log("midtransurl", midtransUrl);
    const data = {
      first_name: values.first_name,
      amount: price,
    };

    axiosInstance
      .post("/api/transactions", data)
      .then((res) => {
        console.log("res", res.data);
        if (res.data.midtrans_url) {
          window.location.href = res.data.midtrans_url;
        }
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  const [alert, setAlert] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subTotal = price * quantity;

  return (
    <>
      <div
        className="p-7
             max-sm:p-4"
      >
        <h2 className="text-lg font-bold text-left mb-2">
          Atur Jumlah dan catatan{" "}
        </h2>
        <div
          className="flex h-25 gap-5 
               max-sm:gap-3 max-sm:h-auto"
        >
          <img src={activeimage} className="h-16 w-12 mt-2" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            {/* Tombol Kurang */}
            <button
              onClick={decreaseQuantity}
              className="border border-gray-500 px-3 py-1 rounded-md text-lg font-bold"
              disabled={quantity === 1}
            >
              -
            </button>

            {/* Jumlah Produk */}
            <span className="text-lg font-semibold px-4">{quantity}</span>

            {/* Tombol Tambah */}
            <button
              onClick={increaseQuantity}
              className="border border-gray-500 px-3 py-1 rounded-md text-lg font-bold"
              disabled={quantity >= stock}
            >
              +
            </button>

            {/* Stok Produk */}
          </div>
        </div>
        {/* {nameError && <span className="text-red-600 text-sm -mt-2">{nameError}</span>} */}
      </div>
      <div className="flex px-5 gap-5 ">
        <p className="text-gray-500 font-bold">SubTotal</p>
        <p className="font-bold">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(subTotal)}
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleCheckout}
        initialValues={{
          paymentMethod: "credit-card",
        }}
      >
        <Form.Item
          name="first_name"
          label="Your Name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Complete Checkout
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DetailCheckout;
