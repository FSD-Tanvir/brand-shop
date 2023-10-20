import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const PropsContext = createContext(null)

const PropsProvider = ({children}) => {
    const[product, setProduct] =useState(null)
    const handleDetails = (p) =>{
        setProduct(p)
    }

    const value ={
        product,
        handleDetails
    }

    return (
        <PropsContext.Provider value={value} >
            {children}
        </PropsContext.Provider>
    );
};

PropsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PropsProvider;