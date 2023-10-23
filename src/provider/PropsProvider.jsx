import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const PropsContext = createContext(null);

const PropsProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myCart")
      .then((response) => response.json())
      .then((data) => setCartProducts(data));
  }, []);

  const handleDetails = (p) => {
    setProduct(p);
  };

  const handleAddToCart = (p) => {
    const isExits = cartProducts.find((item) => item._id === p._id);
    if (!isExits) {
      fetch("http://localhost:5000/myCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(p),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Product Added Successfully");
          }
        });
    } else {
      toast.error("Oops! Already Added!");
    }
  };

  const value = {
    product,
    handleDetails,
    handleAddToCart,
  };

  return (
    <PropsContext.Provider value={value}>{children}</PropsContext.Provider>
  );
};

PropsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PropsProvider;
