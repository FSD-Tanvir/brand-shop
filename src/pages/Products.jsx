import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PropsContext } from "../provider/PropsProvider";

const Products = () => {
  const Products = useLoaderData();
  const { handleDetails } = useContext(PropsContext);

  if (Products.length == 0) {
    return <h1>no data</h1>;
  }


  return (
    <div className="grid  gap-5 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 w-fit mx-auto px-2 py-10">
      {Products.map((product) => {
        const { name, image, brand, type, price, rating } = product;
        return (
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
              <Link to={`/details`}>
              <button
                className="btn btn-outline btn-error"
                onClick={() => handleDetails(product)}
              >
                Details
              </button>
              </Link>
              <button className="btn btn-outline btn-error">Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
