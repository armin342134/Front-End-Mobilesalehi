import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Container } from "react-bootstrap";
import Shop from "./pages/Shop";
import About from "./Pages/About";
import Success from "./pages/Success";
import { CartProvider } from "./Context/CartContext";
import ProductsDetail from "./components/ProductsComponents/ProductsDetail";
import SignUp from "./components/User/SignUp";
import SignIn from "./components/User/SignIn";
import Profile from "./components/User/Profile";
import NavbarS from "./components/Header/NavbarS";
import SamsungProduct from "./components/ProductsComponents/Mobile/SamsungProduct";
import XiaomiProducts from "./components/ProductsComponents/Mobile/XiaomiProducts";
import NokiaProducts from "./components/ProductsComponents/Mobile/NokiaProducts";
import IphoneProducts from "./components/ProductsComponents/Mobile/IphoneProducts";
import HpProducts from "./components/ProductsComponents/Leptop/HpProducts";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/ProductsComponents/AllProducts";
import ProfileOrders from "./components/User/ProfileOrders";
import OrderProvider from "./Context/OrderContext";
import EditAccount from "./components/User/EditAccount";
import Address from "./components/User/Address";
import UsedPhones from "./pages/UsedPhones";
import ContectUs from "./pages/ContectUs";
function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Container fluid>
          <Navbar />
          <NavbarS />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/productsAll" element={<AllProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contect-US" element={<ContectUs />} />
            <Route path="/used-phones" element={<UsedPhones />} />
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/products/Iphone" element={<IphoneProducts />}></Route>
            <Route
              path="/products/samsung"
              element={<SamsungProduct />}
            ></Route>
            <Route path="/products/xiaomi" element={<XiaomiProducts />}></Route>
            <Route path="/products/nokia" element={<NokiaProducts />}></Route>
            <Route path="/products/Hp" element={<HpProducts />}></Route>
            <Route path="/success" element={<Success />} />
            <Route path="/products/:id" element={<ProductsDetail />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/orders/" element={<ProfileOrders />}></Route>
            <Route path="/profile/address/" element={<Address />}></Route>
            <Route
              path="/profile/users/edit-account/"
              element={<EditAccount />}
            ></Route>
          </Routes>
          <Footer />
        </Container>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
