import PropTypes from "prop-types";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const PropsContext = createContext(null);

const PropsProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const handleDetails = (p) => {
    setProduct(p);
  };
  
  const handleAddToCart = (p) => {
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
