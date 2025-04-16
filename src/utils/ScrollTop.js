import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/product") {
      window.scrollTo(0, 0); // Reset scroll jika bukan halaman produk
    }
  }, [pathname]);

  return null;
}


export default ScrollToTop;
