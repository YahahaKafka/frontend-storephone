// Dummy Database

import { URL_PRODUCT } from "./Endpoint";


import {
  faFireFlameCurved,
  faThumbsUp,
  faHandPointer,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const listcard = [
  {
    id: 1,
    photo: `/img/Iphone16.jpg`,
    photo1: `/img/Iphone11.jpg`,
    name: "Apple Iphone 16",
    tagimg: faCartShopping,
    tag: "Produk Terbaru",
    price: 21500000,
    hasMultipleColors: true,
    color: "none",
    ram: ["8GB"],
    rom: ["256GB"],
    stock: {
      "Black Titanium-8GB-256GB": 5,
      "White Titanium-8GB-256GB": 4,
    },
  },
  {
    id: 2,
    photo: "/img/Iphone13ProMax.jpg",
    name: "Apple Iphone 13 Pro Max",
    tagimg: faFireFlameCurved,
    tag: "Produk Terlaris",
    price: 100000,
    hasMultipleColors: false,
    color: "Silver",
    ram: ["6GB"],
    rom: ["128GB", "256GB", "512GB", "1024GB"],
    stock: {
      "Silver-6GB-128GB": 7,
      "Silver-6GB-256GB": 2,
      "Silver-6GB-512GB": 16,
      "Silver-6GB-1024GB": 9,
    },
  },
  {
    id: 3,
    photo: "/img/Iphone11.jpg",
    name: "Iphone 11 Pro Max",
    tagimg: faThumbsUp,
    tag: "Produk Termurah",
    price: "IDR 7.299.000",
    hasMultipleColors: false,
    color: "White",
    ram: ["4GB"],
    rom: ["64GB", "256GB", "512GB"],
    stock: {
      "White-4GB-64GB": 17,
      "White-4GB-256GB": 23,
      "White-4GB-512GB": 2,
    },
  },
  {
    id: 4,
    photo: "/img/SamsungS24.jpg",
    name: "Samsung S24 Ultra",
    tagimg: faFireFlameCurved,
    tag: "Produk Terlaris",
    price: "IDR 15.000.000",
    hasMultipleColors: false,
    color: "Purple",
    ram: ["12GB"],
    rom: ["256GB", "512GB", "1024GB"],
    stock: {
      "Purple-12GB-256GB": 5,
      "Purple-12GB-512GB": 3,
      "Purple-12GB-1024GB": 2,
    },
  },
  {
    id: 5,
    photo: "/img/PocoX6.jpg",
    name: "Poco X6 Pro",
    tagimg: faHandPointer,
    tag: "Paling Banyak Dicari",
    price: "IDR 4.200.000",
    hasMultipleColors: false,
    color: "Black",
    ram: ["8GB"],
    rom: ["256GB"],
    stock: {
      "Black-8GB-256GB": 28,
    },
  },
  {
    id: 6,
    photo: "/img/RedmiNote13Pro.jpg",
    name: "Redmi Note 13 Pro",
    tagimg: faCartShopping,
    tag: "Produk Terbaru",
    price: "IDR 4.199.000",
    hasMultipleColors: false,
    color: "White",
    ram: ["8GB"],
    rom: ["256GB"],
    stock: {
      "White-8GB-256GB": 68,
    },
  },
];

export default listcard;
