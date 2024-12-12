import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h3>خرید با موفقیت انجام شد</h3>
      <Link to="/" className="btn btn-light m-2">
        بازگشت به صفحه قبل
      </Link>
    </div>
  );
}
