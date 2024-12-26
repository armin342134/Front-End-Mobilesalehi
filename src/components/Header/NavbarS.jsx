import { Button, NavDropdown, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "./../CostumStyle.css";
import { useNavigate } from "react-router-dom";

function NavbarS() {
  const navigate = useNavigate();
  const Mobile = [
    { productName: "آیفون", productPath: "/products/iphone" },
    { productName: "سامسونگ", productPath: "/products/samsung" },
    { productName: "شیائومی", productPath: "/products/xiaomi" },
    { productName: "نوکیا", productPath: "/products/nokia" },
  ];
  const Leptop = [
    { productName: " لپ تاپ مک بوک", productPath: "/products/Macbook" },
    { productName: " لپ تاپ ایسوس", productPath: "/products/samsung" },
    { productName: " لپ تاپ لنوو", productPath: "/products/xiaomi" },
    { productName: " لپ تاپ Hp", productPath: "/products/Hp" },
  ];

  return (
    <>
      <Navbar expand="lg" dir="rtl" className="mt-1 ">
        {" "}
        {/* منوی همبرگری */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light " />
        {/* لینک‌های ناوبری */}
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto  mt-2 ">
            {/* ms-auto برای چیدمان از راست به چپ */}
            <LinkContainer to={"/"}>
              <Nav.Link eventKey={"/"} className="text-light pe-lg-5 ">
                خانه
              </Nav.Link>
            </LinkContainer>
            <NavDropdown
              title={
                <span style={{ color: "white", marginRight: "10px" }}>
                  محصولات
                </span>
              }
              style={{
                textAlign: "right",
                borderRadius: "10px",
              }}
              className="text-bg-danger custom-dropdown me-lg-3 nav-product  "
              drop="down"
            >
              <NavDropdown
                title={<span style={{ color: "black" }}>گوشی موبایل</span>}
                style={{ textAlign: "right" }}
                drop="start"
              >
                {Mobile.map((item) => (
                  <LinkContainer
                    to={item.productPath}
                    style={{ textAlign: "right" }}
                  >
                    <NavDropdown.Item>{item.productName}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "black" }}> لپ تاپ</span>}
                style={{ textAlign: "right" }}
                drop="start"
              >
                {Leptop.map((item) => (
                  <LinkContainer
                    to={item.productPath}
                    style={{ textAlign: "right" }}
                  >
                    <NavDropdown.Item style={{ textAlign: "right" }}>
                      {item.productName}
                    </NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "black" }}>ساعت هوشمند</span>}
                style={{ textAlign: "right" }}
                drop="start"
              >
                <LinkContainer
                  to={"/products/xiaomi"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item
                    style={{ textAlign: "right" }}
                  ></NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "black" }}>هندزفری</span>}
                style={{ textAlign: "right" }}
                drop="start"
              >
                <LinkContainer
                  to={"/products/xiaomi"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item
                    style={{ textAlign: "right" }}
                  ></NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "black" }}>لوازم جانبی</span>}
                style={{ textAlign: "right" }}
                drop="start"
              >
                <LinkContainer
                  to={"/products/xiaomi"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item
                    style={{ textAlign: "right" }}
                  ></NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </NavDropdown>
            <LinkContainer to={"/used-phones"}>
              <Nav.Link
                eventKey={"/used-phones"}
                className="text-light pe-lg-5 "
              >
                گوشی های کارکرده
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/about"}>
              <Nav.Link eventKey={"/about"} className="text-light pe-lg-5">
                درباره ما
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Contect-Us"}>
              <Nav.Link eventKey={"/Contect-Us"} className="text-light pe-lg-5">
                تماس باما
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-none d-md-block">
            <Button
              className="bg-transparent btn-outline-danger"
              onClick={() => {
                localStorage.getItem("token")
                  ? navigate("/profile")
                  : navigate("/signin");
              }}
            >
              حساب کاربری
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarS;
