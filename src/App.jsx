import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

// Website
import Navbar from "./component/Display/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetail from "./component/Display/ProductDetail";
import { Footer } from "antd/es/layout/layout";

import Sidebar from "./component/sidebar/sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import ProductDas from "./pages/dashboard/ProductDas";
import AddProduct from "./pages/dashboard/ProductCreate";
import Checkout from "./pages/Checkout";
import UpdateProduct from "./pages/dashboard/ProductUpdate2";

import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="">
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  
                </>
              }
            />
            <Route
              path="/product"
              element={
                <>
                  <Navbar />
                  <Product />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <Navbar />
                  <ProductDetail />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <Contact />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                </>
              }
            />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/signin" element={<Login />} />

            {/* Protected Routes - Dashboard Layout */}
            <Route
              path="/dashboard/*"
              element={
                <Layout style={{ minHeight: "100vh" }}>
                  {/* Sidebar */}
                  <Sidebar collapsed={collapsed} />

                  {/* Main Content */}
                  <Layout>
                    <Header
                      style={{
                        padding: 0,
                        background: "#fff",
                        boxShadow: "0 2px 8px #f0f1f2",
                      }}
                    >
                      <Button
                        type="text"
                        icon={
                          collapsed ? (
                            <MenuUnfoldOutlined />
                          ) : (
                            <MenuFoldOutlined />
                          )
                        }
                        onClick={toggleSidebar}
                        style={{ fontSize: "16px", marginLeft: "16px" }}
                      />
                    </Header>

                    <Content
                      style={{
                        margin: "16px",
                        padding: "16px",
                        background: "#fff",
                        minHeight: "280px",
                      }}
                    >
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="productdas" element={<ProductDas />} />
                        <Route
                          path="productdas/create"
                          element={<AddProduct />}
                        />
                        <Route
                          path="productdas/:id"
                          element={<UpdateProduct />}
                        />
                      </Routes>
                    </Content>
                  </Layout>
                </Layout>
              }
            />
          </Routes>
        </Router>
          <Footer/>
      </div>
    </>
  );
};

export default App;
