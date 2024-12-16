import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductsDetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { formatPrice } from "./ChangeNumbers";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import Comments from "./Comments";

export default function ProductsDetail() {
  const cart = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(["مشکی"]);

  const handelchangeColor = (event) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    fetch(`https://mobilesalehi.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("خطا در بارگذاری محصول", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>در حال بارگذاری محصول ...</p>;
  }
  if (!product) {
    return <p> محصولی یافت نشد</p>;
  }
  document.title = `${product.title} ${product.Specifications.memory} ${product.Specifications.ram}`;
  return (
    <div className="container-lg  container-id">
      <div className="row ">
        <div className="col-md-4 col-sm-6   h-auto position-relative  overflow-hidden">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper w-100 h-100  "
            breakpoints={{
              640: { height: 300 },
              768: { height: 400 },
              1024: { height: 500 },
            }}
          >
            {product.imgGallery.map((item) => (
              <SwiperSlide key={item}>
                <img
                  src={item}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "90%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-md-4 col-sm-6  mt-5">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th className="text-center" colSpan={"2"}>
                  مشخصات دستگاه
                </th>
              </tr>
            </thead>
            <tbody key={product._id}>
              <tr>
                <td>چیپست (پردازنده – CPU) :</td>
                <td>{product.Specifications.cpu}</td>
              </tr>
              <tr>
                <td>حافظه داخلی :</td>
                <td>{product.Specifications.memory}</td>
              </tr>
              <tr>
                <td>حافظه RAM :</td>
                <td>{product.Specifications.ram}</td>
              </tr>
              <tr>
                <td>سایز صفحه نمایش :</td>
                <td>{product.Specifications.display}</td>
              </tr>
              <tr>
                <td>دوربین پشت :</td>
                <td>{product.Specifications.camera}</td>
              </tr>
              <tr>
                <td>ظرفیت باتری :</td>
                <td>{product.Specifications.battry}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-sm-6  d-flex flex-column justify-content-around  bg-light  rounded-3 shadow">
          <div>
            <h2 className="text-dark mt-3 mt-md-0">گارانتی :</h2>
            <div>
              <select className="text-dark w-100">
                <option className="text-dark">18 ماه گارانتی سازگار</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-dark  mt-3 mt-md-0">رنگ :</h2>
            <div>
              {" "}
              <select
                className="form-select  mt-3 mt-md-0"
                onChange={handelchangeColor}
              >
                {product.colors.map((item) => (
                  <option key={item} className="text-dark">
                    {item}
                  </option>
                ))}
              </select>{" "}
            </div>
          </div>
          <div>
            <button
              className="btn btn-danger  mt-3 mt-md-0"
              onClick={() => cart.addItemToCart(product._id, color)}
            >
              افزودن سبد خرید
            </button>
          </div>
          <div>
            <h2 className="text-dark  mt-3 mt-md-0">
              قیمت : {formatPrice(product.price)} تومان
            </h2>
          </div>
        </div>
      </div>
      <Row className="mt-5">
        <Tabs
          defaultActiveKey="review"
          id="product-tabs"
          className="mb-3 text-dark"
          fill
        >
          <Tab eventKey="review" title="نقد و بررسی">
            <h2>{product.title}</h2>
            <p>قیمت : {formatPrice(product.price)} تومان</p>
            <h3>نقد و بررسی</h3>
            <p>{product.description}</p>
          </Tab>
          <Tab eventKey="comments" title="نظرات کاربران">
            <Comments productId={product._id} productTitle={product.title} />
          </Tab>
        </Tabs>
      </Row>

      <Row>
        <Col className="text-center">
          <Link to={"/"} className="btn btn-light mb-5 mt-5">
            بازگشت به صفحه اصلی
          </Link>
        </Col>
      </Row>
    </div>
  );
}
