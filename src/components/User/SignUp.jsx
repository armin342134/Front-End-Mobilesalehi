import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirtstname] = useState("");
  const [lastname, setLastname] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://mobilesalehi.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });
      const data = res.json();
      data.then((message) => message);

      if (res.ok) {
        Swal.fire({
          title: "ثبت نام با موفقیعت انجام شد",
          icon: "success",
        }).then(() => {
          Navigate("/signin");
        });
      }

      if (!res.ok) {
        Swal.fire({
          title: "قبلا با این نام کاربری ثبت نام شده",
          icon: "error",
        });
      }

      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "ثبت نام ناموفق بود",
        icon: "error",
      });
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form className="p-4 border rounded bg-light">
            <h2 className="text-center bg-white text-dark mb-4">
              فرم ثبت‌ نام
            </h2>
            <Form.Group controlId="formUsername bg-white" className="mt-3">
              <Form.Control
                type="text"
                placeholder="نام "
                name="firstname"
                required
                onChange={(e) => setFirtstname(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formUsername bg-white" className="mt-3">
              <Form.Control
                type="text"
                placeholder="نام خانوادگی "
                name="lastname"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUsername bg-white" className="mt-3">
              <Form.Control
                type="text"
                placeholder="نام کاربری را وارد کنید"
                name="username"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Control
                type="password"
                placeholder="رمز عبور را وارد کنید"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="secondary"
              type="submit"
              className="w-100 mt-4"
              onClick={handleSubmit}
            >
              ثبت‌ نام
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
