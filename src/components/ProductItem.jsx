import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../components/ChangeNumbers";

export default function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const ProductQuantity = cart.getProductQuantity(product._id);

  return (
    <Card className=" me-3 ms-3  card-bg">
      <CardBody>
        <CardImg
          variant="top"
          style={{ objectFit: "cover" }}
          src={product.img}
          height="200px"
          className="img-fluid"
        ></CardImg>
        <Link to={`/products/${product._id}`} className="btn text-dark">
          <CardTitle
            align="right"
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
