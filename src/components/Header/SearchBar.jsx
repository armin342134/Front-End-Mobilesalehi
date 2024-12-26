import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import useProductList from "../../Data/product";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { productList } = useProductList();
  const [searchTerm, setSearchTerm] = useState("");

  const filterProduct = productList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlechange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleItemClick = () => {
    setSearchTerm("");
  };
  return (
    <>
      <Form
        className=" d-flex  mx-lg-5 col-10 col-md-4 me-3 mt-3 mt-md-0"
        dir="rtl"
      >
        <Form.Group controlId="searchbar" className="w-100">
          <FormControl
            autoComplete="off"
            type="text"
            placeholder="جستجو ..."
            value={searchTerm}
            onChange={handlechange}
            style={{ position: "relative", zIndex: "inherit" }}
          ></FormControl>
          {searchTerm && (
            <ul
              className="search-ul rounded-2  col-10 col-md-5 w-50 "
              style={{ left: "28%", top: "73%" }}
            >
              {filterProduct.length > 0 ? (
                filterProduct.map((item) => (
                  <Link
                    to={`products/${item._id}`}
                    onClick={handleItemClick}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li className="searchbar-list  me-3 " key={item.id}>
                      {item.title}
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </li>
                  </Link>
                ))
              ) : (
                <li className="searchbar-list-down">هیچ چیزی یافت نشد</li>
              )}
            </ul>
          )}
        </Form.Group>
      </Form>
    </>
  );
}
