// import React, { useState, useEffect } from "react";
// import { Card, Col, Row, Button, Typography, message } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import axios from "axios";
// import { URL_PRODUCT } from "../utils/Endpoint";
// import { Link } from "react-router-dom";

// const { Title } = Typography;

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch data produk saat halaman dimuat
//   useEffect(() => {
//     axios
//       .get(URL_PRODUCT)
//       .then((res) => {
//         console.log("res", res.data);
//         setProducts(res.data); // Simpan data produk ke state
//       })
//       .catch((err) => {
//         console.log(err);
//         message.error("Failed to fetch products");
//       });
//   }, []);

//   // Fungsi untuk handle klik "Add to Cart"
//   const handleAddToCart = (product) => {
//     message.success(`${product.name} added to cart!`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Title level={2}>Product List</Title>
//       <Row gutter={[16, 16]}>
//         {products.map((product) => (
//           <Col span={8} key={product._id}>
//             <Card
//               hoverable
//               cover={<img alt={product.name} src={product.thumbnail} />}
//             >
//               <Card.Meta
//                 title={product.name}
//                 description={`Rp ${product.price}`}
//               />
//               <Button
//                 type="primary"
//                 icon={<ShoppingCartOutlined />}
//                 style={{ marginTop: "10px" }}
//                 onClick={() => handleAddToCart(product)}
//               >
//                 <Link to={`/checkout/${product._id}`} style={{ color: "white" }}>
//                   Checkout Now
//                 </Link>
//               </Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";

const Home = () => {
  const navigate = useNavigate(); // Gunakan useNavigate di sini

  return (
    <>
      <div className="pt-15">
        {/* Home */}
        <div className="bg-gray-400 min-md:h-100 min-md:w-screen justify-center items-center
             max-sm:h-120 max-sm:w-screen ">
          <div className="py-20 px-70 flex 
              max-sm:flex-col max-sm:px-5 max-sm:py-10">
            <img
              src="img/Iphone12.png"
              className="h-75 w-56 -my-10 mr-20 
              max-sm:h-50 max-sm:w-40 max-sm:mx-auto max-sm:my-0"
              alt="Iphone 12"
            />
            <div className="w-150 
                max-sm:w-full max-sm:text-center">
              <h1 className="text-4xl font-semibold 
                  max-sm:text-2xl">
                Toko HP Paling Murah!
              </h1>
              <h3 className="text-blue-600 font-bold 
                  max-sm:text-lg">
                Produk Second berkualitas
              </h3>
              <p className="max-sm:text-sm">
                Menyediakan berbagai macam Handphone Kualitas terbaik, dengan
                harga terjangkau
              </p>
              <button
                className="bg-blue-600 rounded-3xl w-27 h-8 mt-20 text-white font-bold cursor-pointer 
                    max-sm:w-full max-sm:mt-10 max-sm:py-2"
                onClick={() => navigate("/product")} // Perbaiki penggunaan useNavigate
              >
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="text-center mt-0 bg-gray-200 text-black h-auto">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
