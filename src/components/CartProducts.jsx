import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import useProductList from "../data/product";
import { formatPrice } from "./ChangeNumbers";

export default function CartProducts({ _id, quantity, color }) {
  const { getProductData, error } = useProductList();
  const cart = useContext(CartContext);
  const productData = getProductData(_id);
  if (error) {
    return <p className="text-danger">خطا در بارگذاری محصولات: {error}</p>;
  }
  if (!productData) {
    return <p className="text-dark">در حال بارگذاری...</p>;
  }
  const selectorColor = cart.items.find((item) => item._id === _id)?.color;
  const stringColor = selectorColor.join(" , ");
  return (
    <div className="border-bottom border-secondary p-3">
      <p className="text-dark">نام محصول :{productData.title}</p>
      {selectorColor && <p className="text-dark">رنگ : {stringColor}</p>}
      <p className="text-dark">تعداد : {quantity}</p>
      <p className="text-dark">
        قیمت : {formatPrice(quantity * productData.price)} تومان
      </p>
      <Button
        className="btn btn-secondary "
        onClick={() => cart.deleteFromCart(_id)}
      >
        حذف
      </Button>
    </div>
  );
}
