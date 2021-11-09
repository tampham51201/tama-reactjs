import React from "react";
import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";
const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },
  {
    display: "Liên hê",
    path: "/about",
  },
  {
    display: "Tuyển Dụng",
    path: "/about",
  },
  {
    display: "Tin Tức",
    path: "/about",
  },
  {
    display: "Hệ Thống Cửa Hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <Grid col={4} mdCol={2} smCol={1} gap={1}>
            <div>
              <div className="footer__title">Tổng Đài Hổ Trợ</div>
              <div className="footer__content">
                <p>
                  Liên hệ đặt hàng <strong>0339045945</strong>
                </p>
                <p>
                  Thắc măc đơn hàng <strong>0339045945</strong>
                </p>
                <p>
                  Góp ý, khiếu nại <strong>0339045945</strong>
                </p>
              </div>
            </div>

            <div>
              <div className="footer__title">Về Yolo</div>
              <div className="footer__content">
                {footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="footer__title">Chăm sóc khách hàng</div>
              <div className="footer__content">
                {footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </p>
                ))}
              </div>
            </div>

            <div className="footer__about">
              <p>
                <Link to="/">
                  <img src={logo} alt="" className="footer__logo" />
                </Link>
              </p>
              <p>
                Hướng đến mục tiêu mang lại niềm vui ăn mặc mỗi ngày cho hàng
                triệu người tiêu dùng Việt
              </p>
            </div>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
