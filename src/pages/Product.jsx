import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { _id, name, image, brand, type, price, rating } = product;
  return (
    <div>
      <div
        key={name}
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <img
          src={image}
          alt="Product"
          className="h-80  w-fit object-cover rounded-t-xl mx-auto"
        />
        <div className="px-4 py-1 ">
          <div className=" flex justify-between items-center">
            <span className="text-gray-400 mr-3 capitalize text-xs">
              Brand: {brand} / {type}
            </span>
            <span className="text-gray-400 mr-3 capitalize text-xs">
              Rating : {rating} star
            </span>
          </div>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 pb-5">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-outline btn-error">Details</button>
          </Link>
          <Link to={`/products/update/${_id}`}>
            <button className="btn btn-outline btn-error">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
