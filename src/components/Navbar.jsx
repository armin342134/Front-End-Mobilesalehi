import React from "react";
import { Navbar as Navbarbs, Button, Modal, ModalBody } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartProducts from "./CartProducts";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlackFriday from "./SliderComponents/BlackFriday";
import { formatPrice } from "./ChangeNumbers";

export default function Navbar() {
  const [showmodal, setShowmodal] = useState(false);
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const handelShow = () => {
    setShowmodal(true);
  };
  const handelClose = () => {
    setShowmodal(false);
  };

  async function order() {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "لطفا در سایت ثبت نام کنید",
        icon: "warning",
      });
    }

    const res = await fetch("https://mobilesalehi.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ items: cart.items, product: cart.ca }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.assign(data.url);
    }
  }
  return (
    <div className="row">
      <BlackFriday />
      <Navbarbs className=" border-bottom border-secondary pb-3 d-flex  ">
        <Navbarbs.Collapse className="d-flex justify-content-between flex-column flex-md-row ">
          <div className="  col-10 col-md-2 me-1  ">
            <img
              className="img-fluid  w-100 "
              src="/Logo/logo-mobilesalehi.png"
            />
          </div>
          <SearchBar />

          <div className="col-5 col-md-3  d-flex align-content-center justify-content-center  justify-content-md-end mt-3 mt-md-0">
            {localStorage.getItem("token") ? (
              <Link to={"/profile"} style={{ fontSize: "35px" }}>
                <MdAccountCircle className="mt-2 mx-3"></MdAccountCircle>
              </Link>
            ) : (
              <Button
                variant="btn  btn-outline-secondary h-50 "
                className="text-white mx-2"
                onClick={() => navigate("/signin")}
              >
                ورود
              </Button>
            )}
            <Button
              onClick={handelShow}
              variant="btn btn-outline-secondary"
              className="text-white ms-3 fs-6 text-nowrap"
            >
              ({productsCount})<BsCart className="mx-2  "></BsCart>
              سبد خرید
            </Button>
          </div>
        </Navbarbs.Collapse>
      </Navbarbs>
      <Modal
        show={showmodal}
        onHide={handelClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header>
          <ModalBody>
            {productsCount > 0 ? (
              <>
                <h3 className="mb-4 text-dark">سبد خرید</h3>
                {cart.items.map((items) => (
                  <CartProducts
                    key={items._id}
                    _id={items._id}
                    quantity={items.quantity}
                    title={items.title}
                  ></CartProducts>
                ))}
              </>
            ) : (
              <h3 className="text-dark">سبد خرید خالی است</h3>
            )}
            <h3 className="mt-3 mx-5 text-dark">
              مجموع قیمت : {formatPrice(cart.getTotalAmount())}
            </h3>
            <Button
              onClick={order}
              variant="btn "
              className="btn-dark mx-3 mt-4"
            >
              ثبت سفارش
            </Button>

            <Button
              onClick={handelClose}
              variant="btn btn-outline-secondary"
              className="text-dark mx-3 mt-4"
            >
              بستن
            </Button>
          </ModalBody>
        </Modal.Header>
      </Modal>
    </div>
  );
}
