import { createContext, useState } from "react";
import useProductList from "../data/product";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  deleteFromCart: () => {},
  removeItemFromCart: () => {},
  getTotalAmount: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartproducts, setCartproducts] = useState([]);
  const { getProductData } = useProductList();

  const getProductQuantity = (_id) => {
    const quantity = cartproducts.find((item) => item._id === _id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addItemToCart = (_id, color) => {
    const productDate = getProductData(_id);
    const quantity = getProductQuantity(_id);
    if (quantity === 0) {
      setCartproducts([
        ...cartproducts,
        {
          _id: _id,
          quantity: 1,
          title: productDate.title,
          color: Array.isArray(color) ? [...color] : [color],
        },
      ]);
    } else {
      setCartproducts(
        cartproducts.map((item) =>
          item._id === _id
            ? {
                ...item,
                quantity: item.quantity + 1,
                color: [
                  ...new Set([
                    ...item.color,
                    ...(Array.isArray(color) ? [...color] : [color]),
                  ]),
                ],
              }
            : item
        )
      );
    }
  };

  const deleteFromCart = (_id) => {
    setCartproducts(
      cartproducts.filter((item) => {
        return item._id != _id;
      })
    );
  };

  const removeItemFromCart = (_id) => {
    const quantity = getProductQuantity(_id);
    if (quantity === 1) {
      deleteFromCart(_id);
    } else {
      setCartproducts(
        cartproducts.map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotalAmount = () => {
    const { getProductData } = useProductList();
    let totalAmount = 0;
    cartproducts.map((item) => {
      const productData = getProductData(item._id);
      totalAmount += productData.price * item.quantity;
    });
    return totalAmount;
  };
  const contextValue = {
    items: cartproducts,
    getProductQuantity,
    addItemToCart,
    deleteFromCart,
    removeItemFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
