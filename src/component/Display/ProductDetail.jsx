import { useParams, useNavigate } from "react-router-dom";
// import { URL_PRODUCT } from "../utils/Endpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMapLocationDot,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import DetailCheckout from "../Features/DetailCheckout";
import { axiosInstance } from "../../util/axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const getProductById = async () => {
    const r = await axiosInstance.get(`/api/products/${id}`);
    setProduct(r.data);
  };

  useEffect(() => {
    getProductById();
  }, []);

  // Jika tidak ditemukan, tampilkan pesan
  if (!product) {
    return <p className="text-center text-red-500">Produk tidak ditemukan.</p>;
  }

  const handleBack = () => {
    if (window.innerWidth <= 768) {
      navigate("/product"); // Jika layar kecil (HP), langsung ke halaman /product
    } else {
      navigate(-1); // Jika layar besar (PC), gunakan navigate(-1)
    }
  };

  // State untuk gambar aktif dan warna dan ukuran terpilih
  const [activeImage, setActiveImage] = useState(product.photo);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedRom, setSelectedRom] = useState("");
  const [stock, setStock] = useState(product?.stock ? 0 : null);

  // Data warna dan gambar alternatif
  const colorOptions = product.hasMultipleColors
    ? [
        { name: "Black Titanium", image: product.photo }, //Gambar Default
        { name: "White Titanium", image: product.photo1 }, //Gambar Alternatif
        // Tambahkan warna lain sesuai kebutuhan
      ]
    : [{ name: product.color, image: product.photo }];

  const ramOptions = product.ram || []; // Data ukuran Ram (Contoh ukuran HP: 8GB, 12GB, 16GB)
  const romOptions = product.rom || []; // Data ukuran Rom (Contoh ukuran HP: 128GB, 256GB, 512GB)

  const updateStock = (color, ram, rom) => {
    if (!product.stock) {
      setStock(0);
      return;
    }
    const key = `${color}-${ram}-${rom}`;
    setStock(product.stock[key] || 0);
  };

  useEffect(() => {
    updateStock(selectedColor, selectedRam, selectedRom);
  }, [selectedColor, selectedRam, selectedRom]);

  // Fungsi untuk mengubah gambar saat warna dipilih
  const handleColorSelect = (color) => {
    setSelectedColor(color.name);
    setActiveImage(color.image);
  };

  // Fungsi pilih ukuran Rome
  const handleRamSelect = (size) => {
    setSelectedRam(size);
  };
  // Fungsi pilih ukuran Rome
  const handleRomSelect = (size) => {
    setSelectedRom(size);
  };

  return (
    <div
      className="py-10 h-200 bg-neutral-100 w-screen
         max-sm:gap-6 max-sm:h-442  "
    >
      {/* Tombol Kembali dan Free Delivery */}
      <div
        className="bg-black flex text-neutral-200 w-screen h-fit gap-70
           max-sm:py-0 max-sm:gap-3 max-sm:text-xs"
      >
        <div
          className="flex text-xl items-center py-2 pl-15 gap-2 font-sans font-bold
             max-sm:pl-4"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            onClick={handleBack}
          />
          <h1> Kembali?</h1>
        </div>
        <div className="flex text-xl items-center py-2 gap-2">
          <FontAwesomeIcon icon={faTruckFast} />
          <h1>Free Delivery on Above IDR 10.000.000</h1>
        </div>
      </div>
      {/* Product */}
      <div
        className="h-179 w-screen min-md:flex min-md:flex-row md:gap-0 text-neutral-800 py-5
           max-sm:flex max-sm:flex-col max-sm:gap-200 max-sm:h-auto max-sm:px-3 "
      >
        {/* DetailProduct */}
        <div
          className="w-200 h-100 
             max-sm:w-full"
        >
          {/* Pemilihan Opsi Product */}
          <div
            className="flex
               max-sm:flex-col max-sm:items-center max-sm:gap-6"
          >
            <img
              src={product.thumbnail}
              className="w-77 mx-12 h-108 rounded-sm
              max-sm:flex-col max-sm:items-center max-sm:h-100 max-sm:w-77 max-sm:rounded-2xl"
              id="productMainImage"
            />

            {/* Nama Product, Detail Product, dan Pilihan Product */}
            <div
              className="h-120 w-100
                 max-sm:w-full max-sm:px-2 max-sm:py-5"
            >
              {/* Nama Product */}
              <div className="inline-block">
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <div className="bg-blue-500 flex flex-wrap gap-2 text-sm items-center h-fit w-40 rounded-3xl px-3 my-2 text-white ">
                  <FontAwesomeIcon icon={product.tagimg} />
                  <h1>{product.tag}</h1>
                </div>
                <p className="font-bold">Terjual</p>
                <h2 className="font-extrabold text-4xl my-2">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </h2>
                <hr className="w-100 text-gray-300"></hr>
              </div>

              {/* Pilihan Product */}
              <div className="inline-block">
                {/* Pilih Ram */}

                {/* Pilih Rom */}
              </div>
            </div>
          </div>
          {/* Teks untuk Detail dari Product */}
          <div
            className="h-100 pl-12 text-black flex gap-10
               max-sm:flex-col max-sm:pl-0 max-sm:gap-6"
          >
            <div
              className="inline-block text-md
                 max-sm:px-4"
            >
              <h1 className="font-bold text-xl">Detail Produk</h1>
              <hr className="my-3 text-gray-300 w-78" />
              <div className="flex gap-10">
                <div className="inline-block text-gray-600">
                  <p>Kondisi</p>
                  <p>Status Sinyal</p>
                  <p>Tahun Rilis</p>
                  <p>Tipe Garansi</p>
                </div>
                <div className="inline-block">
                  <p>: Second, Seperti Baru</p>
                  <p>: Sinyal Aktif</p>
                  <p>: 2024</p>
                  <p>: Garansi Merek (Resmi)</p>
                </div>
              </div>
            </div>
            <div
              className="inline-block text-md gap-0
                 max-sm:px-4"
            >
              <h1 className="font-bold text-xl">Pengiriman</h1>
              <hr className="my-3 text-gray-300 w-78" />
              <div className="flex gap-10">
                <div className="inline-block">
                  <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <div className="flex gap-1">
                      <p>Dikirim dari</p>
                      <p className="font-bold">Jawa Tengah</p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon icon={faTruck} className="text-md" />
                      <p className="font-bold">Ongkir IDR 7.500</p>
                    </div>
                    <p className="text-gray-600 -mt-1 pl-9">
                      Estimasi tiba tergantung lokasi anda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Detil CheckOut */}
        <div
          className="h-auto w-130 justify-items-center
             max-sm:w-full max-sm:mt-6 max-sm:px-4 max-sm:py-6 max-sm:h-100 "
        >
          <DetailCheckout
            activeimage={product.thumbnail}
            selectedColor={selectedColor}
            selectedRam={selectedRam}
            price={product.price}
            selectedRom={selectedRom}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
