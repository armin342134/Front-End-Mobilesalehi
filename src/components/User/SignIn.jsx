import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://mobilesalehi.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate(`/profile/orders/`);
      } else {
        Swal.fire({
          title: "نام کاربری یا رمز عبور اشتباه است",
          icon: "warning",
        });
        console.log("خطا در ورود", data.error);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form
            className="p-4 border rounded bg-light mt-5"
            onSubmit={handelsubmit}
          >
            <h2 className="text-center bg-white text-dark mb-4">
              وارد سایت شوید
            </h2>
            <Form.Group controlId="formUsername bg-white" className="mt-3">
              <Form.Control
                type="text"
                placeholder="نام کاربری را وارد کنید"
                name="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control
                type="password"
                placeholder="رمز عبور را وارد کنید"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 mt-4">
              ورود
            </Button>
            <div className="bg-white , text-center mt-2">
              <Link
                to={"/signup"}
                className="mt-3 bg-white "
                style={{ textDecoration: "none" }}
              >
                ثبت نام کنید
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
