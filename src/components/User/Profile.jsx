import React, { useState } from "react";
import ProfileList from "./ProfileList";
import { Link } from "react-router-dom";
export default function Profile() {
  const orders = JSON.parse(localStorage.getItem("order"));

  const totalQuantity = orders.reduce((grandTotal, order) => {
    const orderTotal = order.items.reduce(
      (subtotal, item) => subtotal + item.quantity,
      0
    );
    return grandTotal + orderTotal;
  }, 0);

  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      <div className="col-12 col-md-3  mb-5">
        <ProfileList />
      </div>
      <div
        className="  rounded-3 col-12 col-md-8 d-flex flex-column justify-content-around p-3 p-md-5   me-md-2"
        style={{
          border: "1px solid red",
        }}
      >
        <div className="d-flex justify-content-between align-content-center">
          <h3>سفارش های من</h3>
          <Link to={"/profile/orders/"}>مشاهده همه</Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="d-flex flex-row align-content-center justify-content-center  "
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                src="../../../public/Images/order-img/svgexport-1.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="d-flex flex-column  align-content-center justify-content-center me-3">
              <div>{totalQuantity} سفارش </div>
              <span className="m-1">جاری</span>
            </div>
          </div>
          <div
            className="d-flex flex-row align-content-center justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                src="../../../public/Images/order-img/status-delivered.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="d-flex flex-column  align-content-center justify-content-center me-3">
              <div>0 سفارش</div>
              <span className="m-1">تحویل شده</span>
            </div>
          </div>
          <div
            className="d-flex flex-row align-content-center justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                src="../../../public/Images/order-img/status-returned.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="d-flex flex-column  align-content-center justify-content-center me-3">
              <div>0 سفارش </div>
              <span className="m-1">مرجوع شده</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
