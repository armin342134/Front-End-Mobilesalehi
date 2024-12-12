import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../ProductItem";
import useProductList from "../../data/product";
import Pageslider from "../SliderComponents/Pageslider";

export default function AllProducts() {
  const productList = useProductList();
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductperPage] = useState(8);
  const indexofLastProduct = ProductperPage * currentPage;
  const indexofFirstProduct = indexofLastProduct - ProductperPage;
  const currentProducts = productList.productList.slice(
    indexofFirstProduct,
    indexofLastProduct
  );
  const paginate = (Pagenumber) => setCurrentPage(Pagenumber);
  const nextpage = () => {
    if (
      currentPage < Math.ceil(productList.productList.length / ProductperPage)
    ) {
      setCurrentPage((pervpage) => pervpage + 1);
    }
  };
  const prevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevpage) => prevpage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-center m-5">همه محصولات</h1>
      <Row xs={1} md={4} className="g-4">
        {currentProducts.map((item) => (
          <Col align="center" key={item.id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
      <Pageslider
        ProductperPage={ProductperPage}
        totalItem={productList.productList.length}
        currentPage={currentPage}
        paginate={paginate}
        nextpage={nextpage}
        prevpage={prevpage}
      />
    </div>
  );
}
