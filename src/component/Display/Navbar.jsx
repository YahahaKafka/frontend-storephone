import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import Search from "../Features/Search";
import MenuMobile from "../Features/MenuMobile";


const Navbar = () => {
  // Fungsi Navbar
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false)

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
      {/* Navbar */}
      <div className="fixed w-screen top-0 z-50">
        <nav className="bg-black relative text-white flex text-center items-center px-7 md:gap-5 py-4 h-15 
             max-sm:px-4 max-sm:py-3 max-sm:flex-nowrap">
          {/* Logo */}
          <div className="flex justify-center items-center absolute left-7 font-extrabold italic text-4xl cursor-default 
              max-sm:static max-sm:mb-2 max-sm:text-2xl">
            <h1 className="text-neutral-200">store</h1>
            <h1 className="text-blue-700">PHONE</h1>
          </div>

          {/* Menu Items */}
          <ul className="flex pl-80 gap-5 cursor-pointer uppercase 
              max-sm:hidden max-sm:gap-2 max-sm:text-sm ">
            {listitem.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`${
                    pathname === item.path ? "text-white font-bold" : "text-gray-400"
                  } hover:text-white transition duration-300`}
                >
                  {item.location}
                </Link>
              </li>
            ))}
          </ul>
          <div className="
              max-sm:my-2 max-sm:w-full max-sm:justify-center">
            <Search />
          </div>
            <MenuMobile/>

        </nav>
      </div>
    </>
  );
};

export default Navbar;  