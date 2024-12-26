import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../ChangeNumber/ChangeNumbers";

export default function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const ProductQuantity = cart.getProductQuantity(product._id);

  return (
    <Card className=" me-3 ms-3  card-bg  h-md-100 ">
      <CardBody className="d-flex flex-column flex-nowrap">
        <CardImg
          variant="top"
          style={{ objectFit: "cover" }}
          src={product.img}
          height="200px"
          className="img-fluid"
        ></CardImg>
        <Link to={`/products/${product._id}`} className="btn text-dark">
          {product.inStock == 0 ? (
            <span className="bg-danger text-white  rounded-2 p-1 ">
              {" "}
              ناموجود
            </span>
          ) : (
            <span className="bg-secondary text-white rounded-2 p-1 ">
              موجود در انبار
            </span>
          )}
          <CardTitle
            align="left"
            className="pt-0 pt-md-4 text-dark text-nowrap"
          >
            {product.title}
          </CardTitle>
        </Link>
        <CardText
          align="left"
          className="text-dark text-center mb-5 mb-md-0 "
          dir="rtl"
        >
          {formatPrice(product.price)} تومان
        </CardText>
      </CardBody>
    </Card>
  );
}
