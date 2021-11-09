import { React, useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Sản Phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ Kiện",
    path: "/accessories",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];

const Header = () => {
  const location = useLocation();

  const HeaderRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        HeaderRef.current.classList.add("shrink");
      else HeaderRef.current.classList.remove("shrink");
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const menuLeft = useRef(null);
  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
  };

  return (
    <>
      <div className="header" ref={HeaderRef}>
        <div className="container">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="TaMa" />
            </Link>
          </div>

          <div className="header__menu">
            <div className="header__menu__mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu-alt-left"></i>
            </div>
            <div className="header__menu__left" ref={menuLeft}>
              <div className="header__menu__left-close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i>
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__left__item ${
                    item.path === location.pathname ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>{item.display}</Link>
                </div>
              ))}
            </div>

            <div className="header__menu__right">
              <div className="header__menu__right__item">
                <i className="bx bx-search"></i>
              </div>
              <Link to="/cart">
                <div className="header__menu__right__item">
                  <i className="bx bx-shopping-bag"></i>
                </div>
              </Link>

              <div className="header__menu__right__item">
                <i className="bx bx-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
