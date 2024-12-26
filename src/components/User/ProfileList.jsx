import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useOrder } from "../../Context/OrderContext";

export default function ProfileList() {
  const [user, setUser] = useState(null);
  const { order, setOrder } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return <h2>توکن وجود ندارد</h2>;
      }
      try {
        const res = await fetch(`https://mobilesalehi.onrender.com/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setUser(data.user);
        setOrder(data.order);
      } catch (error) {
        console.log(error, "خطا در دریافت اطلاعات کاربر");
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (order) {
      localStorage.setItem("order", JSON.stringify(order));
    }
  }, [order]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  if (!user) {
    return <div>در حال بارگذاری اطلاعات ...</div>;
  }
  const signoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("order");

    Swal.fire({
      title: "از سایت با موفقییت خارج شدید",
    });
    navigate("/");
  };
  return (
    <div className="container">
      <div className=" border border-white rounded-2   ">
        <div className="text-center mt-2 ">
          <h5>
            {" "}
            {user.firstname} {user.lastname} خوش آمدی{" "}
          </h5>
          <p>{user.email}</p>
        </div>
        <div>
          <ul className="personal-ul">
            <li onClick={() => navigate("/profile/")}>پیشخوان</li>
            <li onClick={() => navigate("/profile/orders/")}>لیست سفارش ها</li>
            <li onClick={() => navigate("/profile/address/")}>آدرس ها</li>
            <li onClick={() => navigate("/profile/users/edit-account/")}>
              اطلاعات حساب کاربری
            </li>
            <li
              className="text-warning"
              onClick={() => alert("این بخش هنوز در دسترس نیست")}
            >
              اعلانات
            </li>
            <li className="text-danger" onClick={signoutHandler}>
              خروج
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
