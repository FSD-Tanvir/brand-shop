import { useContext } from "react";
import { PropsContext } from "../provider/PropsProvider";

const Details = () => {
  const { product, handleAddToCart } = useContext(PropsContext);

  const { name, image, price, description } = product;
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt=""
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              ON SALE
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <p className="leading-relaxed text-justify">{description}</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-between mt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                Price:${price}
              </span>
              <button
                className="btn btn-outline btn-error"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
