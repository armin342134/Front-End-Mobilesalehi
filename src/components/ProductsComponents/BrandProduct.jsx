import React, { useEffect, useState } from "react";
import ProductItem from "../ProductsComponents/ProductItem";
import { Col, Row } from "react-bootstrap";
import Pageslider from "../SliderComponents/Pageslider";

export default function BrandProduct({ brandName }) {
  const [products, setProducsts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductperPage] = useState(8);
  const indexofLastProduct = currentPage * ProductperPage;
  const indexofFirstProduct = indexofLastProduct - ProductperPage;
  const currentProducts = products.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const paginate = (pagenumbers) => {
    setCurrentPage(pagenumbers);
  };
  const nextpage = () => {
    if (currentPage < Math.ceil(products.length / ProductperPage)) {
      setCurrentPage((pervpage) => pervpage + 1);
    }
  };
  const prevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevpage) => prevpage - 1);
    }
  };

  useEffect(() => {
    fetch(`https://mobilesalehi.onrender.com/products?brand=${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducsts(data);
      })
      .catch((error) => console.log("error get data", error));
  }, [brandName]);
  return (
    <div>
      <h2 className="text-center mt-5">محصولات {brandName}</h2>
      <Row xs={1} md={4} className="g4 p-2">
        {currentProducts.map((product) => (
          <Col align="center" key={product._id} className="mt-5">
            <ProductItem key={product._id} product={product} />
          </Col>
        ))}
      </Row>
      <Pageslider
        nextpage={nextpage}
        prevpage={prevpage}
        totalItem={products.length}
        currentPage={currentPage}
        ProductperPage={ProductperPage}
        paginate={paginate}
      />
    </div>
  );
}
