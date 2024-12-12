import { Button, NavDropdown, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "./CostumStyle.css";
import { Link, Navigate } from "react-router-dom";
import { json, useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavbarS() {
  const navigate = useNavigate();

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
                <LinkContainer
                  to={"/products/iphone"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item>آیفون</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to={"/products/samsung"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item>سامسونگ</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to={"/products/xiaomi"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item style={{ textAlign: "right" }}>
                    شیائومی
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  to={"/products/nokia"}
                  style={{ textAlign: "right" }}
                >
                  <NavDropdown.Item style={{ textAlign: "right" }}>
                    نوکیا
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title={<span style={{ color: "black" }}> لپ تاپ</span>}
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
