import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ProfileList from "./ProfileList";

export default function EditAccount() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [firstname, setFirtstname] = useState(user?.firstname || "");
  const [lastname, setLastname] = useState(user?.lastname || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [repetpassword, setRepetPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (password !== repetpassword) {
      return alert("گذروراژ ها برابر نیست");
    }
    const updateFiled = {};
    if (firstname && firstname !== user.firstname)
      updateFiled.firstname = firstname;
    if (lastname && lastname !== user.lastname) updateFiled.lastname = lastname;
    if (email && email !== user.email) updateFiled.email = email;
    if (password) updateFiled.password = password;

    try {
      const res = await fetch("https://mobilesalehi.onrender.com/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: user._id,
          ...updateFiled,
        }),
      });
      const data = await res.json();

      if (data) {
        alert("تغییرات با موفقیت ثبت شد");
      } else {
        alert("خطایی رخ داده است");
      }
    } catch (error) {
      console.log(error);
      alert(" :) خطایی در سرور رخ داده است");
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      <div className="col-12 col-md-3  mb-5">
        <ProfileList />
      </div>
      <div className="col-12 col-md-4 me-mx-2 ">
        <Form className="p-4 border rounded bg-light" onSubmit={handlesubmit}>
          <h2 className="text-center bg-white text-dark mb-4">جزئیات حساب</h2>
          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="تغییر نام :"
              name="firstname"
              defaultValue={user?.firstname || ""}
              onChange={(e) => setFirtstname(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="  تغییر نام خانوادگی : "
              name="lastname"
              defaultValue={user?.lastname || ""}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="تغییر آدرس ایمیل : "
              name="username"
              defaultValue={user?.email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Control
              type="password"
              placeholder=" گذرواژه :"
              name="password"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Control
              type="password"
              placeholder="گذرواژه جدید :"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Control
              type="password"
              placeholder="تکرار گذرواژه جدید :"
              name="password"
              onChange={(e) => setRepetPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="secondary"
            type="submit"
            className="w-100 mt-4"
            onClick={handlesubmit}
          >
            ذخیره تغییرات
          </Button>
        </Form>
      </div>
    </div>
  );
}
