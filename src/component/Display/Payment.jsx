// src/pages/Payment.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state || {};
    const {color, ram, rom, image, quantity,} = state;
    
    useEffect(() => {
        if (!state || Object.keys(state).length === 0) {
          navigate("/");
        }
      }, [state, navigate]);     

  return (
    <div className="pt-[64px] pb-[96px] px-6 bg-neutral-100 min-h-screen text-neutral-800">
      <h1 className="text-2xl font-bold mb-6">Pembayaran</h1>

      {/* Ringkasan Produk */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Ringkasan Produk</h2>
        <div className="flex justify-between">
          <span>Nama Produk</span>
          <span>Rp 1.200.000</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Ongkir</span>
          <span>Rp 20.000</span>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <span>Total</span>
          <span>Rp 1.220.000</span>
        </div>
      </div>

      {/* Form Pembayaran */}
      <form className="bg-white p-4 rounded shadow-md space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nama Lengkap</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none"
            placeholder="Masukkan nama"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Alamat</label>
          <textarea
            className="w-full p-2 border rounded focus:outline-none"
            rows="3"
            placeholder="Alamat lengkap"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Metode Pembayaran</label>
          <select className="w-full p-2 border rounded focus:outline-none">
            <option>Transfer Bank</option>
            <option>COD (Bayar di Tempat)</option>
            <option>QRIS</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Bayar Sekarang
        </button>
      </form>
    </div>
  );
};

export default Payment;
