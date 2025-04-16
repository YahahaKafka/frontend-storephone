import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Tambahkan faTimes untuk ikon close
import { Link, useLocation } from "react-router-dom";

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { pathname } = useLocation(); 

  const listitem = [
    {
      path: "/",
      location: "Home",
    },
    {
      path: "/product",
      location: "Product",
    },
    {
      path: "/contact",
      location: "Contact",
    },
    {
      path: "/about",
      location: "About",
    },
  ];

  return (
    <>
      {/* Tombol Menu */}
      <button
        className="text-white focus:outline-none md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon 
        icon={isMenuOpen ? faTimes : faBars} 
        onClick={() =>setMenu(!menu)}/>
      </button>

      {/* Menu yang Muncul Saat Diklik */}
      {isMenuOpen && (
        <ul className="absolute top-16 right-2 bg-black text-white w-48 py-2 rounded-lg shadow-lg">
          {listitem.map((item, index) => (
            <li key={index} className="hover:bg-gray-700">
              <Link
                to={item.path}
                className={`block px-4 py-2 ${
                  pathname === item.path ? "text-blue-500 font-bold" : ""
                }`}
              >
                {item.location}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuMobile;