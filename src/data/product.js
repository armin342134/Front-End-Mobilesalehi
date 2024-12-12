import { useEffect, useState } from "react";

function useProductList() {
  const [productList, setproductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("https://mobilesalehi.onrender.com/products");

        if (!res.ok) {
          throw new Error("network res was not ok");
        }
        const data = await res.json();
        setproductList(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getdata();
  }, []);
  const getProductData = (_id) => {
    return productList.find((item) => item._id === _id);
  };
  return { productList, getProductData, error };
}
export default useProductList;
