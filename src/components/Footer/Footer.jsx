import React from "react";
import "./../CostumStyle.css";
import { Button } from "react-bootstrap";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTap = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer mt-5 border border-ligth p-3 rounded mb-3">
      <div className="footer-contect ">
        <div className="logo-footer d-flex flex-row  justify-content-between align-items-center mt-3">
          <div className="">
            <img
              className="img-fluid"
              src="/Logo/logo-mobilesalehi.png"
              alt=""
            />
          </div>
          <div className="">
            <Button
              variant="danger"
              onClick={scrollToTap}
              className="  btn-sm fs-6 text-nowrap"
            >
              {" "}
              بازگشت به بالای صفحه
            </Button>
          </div>
        </div>
        <div className="contect-footer p-3">
          <div className="mb-5">
            <h5>آدرس فروشگاه : سهند فاز1 محله3 مجتمع تجاری نفیس</h5>
          </div>
          <div className="mb-5">
            <h5> ایمیل : examel@gmail.com</h5>
            <h5> تلفن : 09910450537</h5>
          </div>
          <div className="mb-5">
            <h5>
              ساعات پاسخگویی تلفنی: شنبه تا چهارشنبه 9 الی 17 (پنج شنبه 9 الی
              13)
            </h5>
          </div>
        </div>
        <div className="social-footer d-flex justify-content-center  ">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#E4405F" className="ms-3" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={30} color="#0088cc" className="ms-3" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25D366" className="ms-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
