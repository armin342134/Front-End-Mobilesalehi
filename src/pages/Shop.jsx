import React from "react";
import { Col, Row } from "react-bootstrap";
import useProductList from "../data/product";
import SwiperPagination from "../components/SliderComponents/SwiperPagination";
import SectionProducts from "../components/SectionProducts";
import IphoneSlider from "../components/SliderComponents/IphoneSlider";
import SamsungSlider from "../components/SliderComponents/SamsungSlider";

export default function Shop() {
  const productList = useProductList();
  document.title = " صفحه ای اصلی - فروشگاه موبایل صالحی";

  return (
    <Row xs={1} md={4} className="g-4 ">
      <SwiperPagination />
      <SectionProducts />
      <IphoneSlider productList={productList} />
      <SamsungSlider />
    </Row>
  );
}
