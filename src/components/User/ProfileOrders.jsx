import React from "react";
import { useOrder } from "../../Context/OrderContext";
import ProfileList from "./ProfileList";

export default function ProfileOrders() {
  const { order } = useOrder();

  return (
    <div
      className="  container mt-5 "
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      <div className="col-12 col-md-3 mb-5">
        <ProfileList />
      </div>

      <div className="col-12 col-md-9  text-center border border-1  rounded-2 bg-secondary  d-flex flex-column align-content-center justify-content-center  ">
        {order && order.length > 0 ? (
          <h1 className="m-5">
            <span className="badge text-bg-danger fw-bolder">
              {" "}
              لیست سفارش های شما
            </span>
          </h1>
        ) : (
          <p>هیچ سفارشی نیس</p>
        )}
        {order && order.length > 0 ? (
          order.map((category) => (
            <div key={category._id}>
              <ul className="list-unstyled">
                {category.items.map((item, index) => (
                  <li key={index} className="mt-2 d-flex justify-content-start">
                    {item.title} - تعداد : ({item.quantity}) (
                    {item.color.join(" , ")})
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>شما هیچ سفارشی ندارید</p>
        )}
      </div>
    </div>
  );
}
