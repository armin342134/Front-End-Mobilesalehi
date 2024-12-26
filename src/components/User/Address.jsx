import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ProfileList from "./ProfileList";

export default function Address() {
  const [getaddress, setGetaddress] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const data = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/address/${data._id}`);
        if (!res.ok) {
          console.log("پاسخی از سمت سرور دریافت نمیشود");
        }
        const userdata = await res.json();
        setGetaddress(userdata);
      } catch (error) {
        console.log("خطایی در سرور رخ داده است");
      }
    };
    fetchUserData();
  }, [data]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (address.length < 10) {
      return alert("آدرس را دقیق وارد کنید");
    }
    const updateFiled = {};

    if (address && address !== getaddress.address)
      updateFiled.address = address;
    if (postalcode && postalcode !== getaddress.postalcode)
      updateFiled.postalcode = postalcode;
    if (phonenumber && phonenumber !== getaddress.phonenumber)
      updateFiled.phonenumber = phonenumber;
    try {
      const res = await fetch("http://localhost:5000/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: data._id,
          ...updateFiled,
        }),
      });
      if (res.ok) {
        return alert("آدرس با موفقییت ثبت شد");
      }
      const info = await res.json();
      console.log(info);
    } catch (error) {
      console.error("error", error.message);
    }
  };
  // تابع تبدیل اعداد انگلیسی به فارسی
  function toPersianDigits(...input) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return input.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
  }
  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
    >
      <div className="col-12 col-md-3 mb-5 ">
        <ProfileList />
      </div>
      <div className="me-4 mb-5 ">
        <Form className="p-4 border rounded bg-light">
          <h2 className="text-center bg-white text-dark mb-4">
            {" "}
            ثبت‌ آدرس محل سکونت
          </h2>
          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="آدرس : "
              name="address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="کد پستی : "
              name="postalcode"
              onChange={(e) => setPostalcode(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formUsername bg-white" className="mt-3">
            <Form.Control
              type="text"
              placeholder="تلفن همراه : "
              name="phonenumber"
              required
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-3 bg-danger" onClick={handlesubmit}>
            {" "}
            ثبت آدرس
          </Button>
        </Form>
      </div>
      <div className="  me-4 bg-light rounded-3 p-3 text-dark h-50">
        <h4> آدرس : {toPersianDigits(getaddress.address)}</h4>
        <h4>کد پستی : {toPersianDigits(getaddress.postalcode)}</h4>
        <h4> تلفن همراه : {toPersianDigits(getaddress.phonenumber)}</h4>
      </div>
    </div>
  );
}
