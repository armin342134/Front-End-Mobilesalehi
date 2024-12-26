import React from "react";
import { Link } from "react-router-dom";

export default function SectionProductsItem({ pagelink, img, title }) {
  return (
    <div className="col-2  ">
      <Link
        to={pagelink}
        className="text-center text-white text-decoration-none  "
      >
        <div
          style={{
            border: "5px solid red",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <img src={img} className="img-fluid rounded-circle " />
        </div>
        <h2 className="mt-4 ">{title}</h2>
      </Link>
    </div>
  );
}
