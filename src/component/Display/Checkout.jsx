import React from "react";

const Checkout = ({ ram, rom, warna, harga, kurir, ongkir, asuransi, hargaAsuransi, paymentMethod }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 max-w-4xl mx-auto mt-8">
      {/* Gambar Produk */}
      <div className="w-1/4">
        <img
          src="/path/to/produk.jpg"
          alt="Produk"
          className="rounded-lg w-full object-cover"
        />
        <div className="mt-2 text-xs bg-violet-200 text-violet-700 w-max px-2 py-1 rounded">Produk</div>
      </div>

      {/* Detail Produk */}
      <div className="w-3/4 space-y-3">
        <h2 className="text-lg font-semibold">
          Apple iPhone 11 PRO Garansi Resmi – {ram} {rom}
        </h2>
        <p className="text-sm text-gray-600">{rom}, {warna}</p>
        <p className="text-lg font-bold text-black">Rp{harga.toLocaleString("id-ID")}</p>

        {/* Proteksi */}
        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="accent-green-500" defaultChecked />
          <span className="line-clamp-1">Proteksi Gadget Ekstra 12 bulan</span>
          <span className="text-gray-500">(Rp104.000)</span>
        </div>

        {/* Pengiriman */}
        <div className="border border-gray-300 p-4 rounded-lg text-sm space-y-2">
          <div className="font-medium">{kurir} (Rp{ongkir.toLocaleString("id-ID")})</div>
          <div className="text-gray-500">Estimasi tiba 26 – 30 Mar</div>
          <hr />
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-600" defaultChecked />
            <span>Pakai Asuransi Pengiriman</span>
            <span className="text-gray-500">(Rp{hargaAsuransi.toLocaleString("id-ID")})</span>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="text-sm mt-2">
          <span className="font-medium">Metode Pembayaran:</span> {paymentMethod}
        </div>

        {/* Catatan */}
        <div className="flex items-center justify-between border-t pt-3 text-sm">
          <span className="flex items-center gap-1 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
            </svg>
            Kasih Catatan
          </span>
          <span className="text-gray-400">0/200</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
