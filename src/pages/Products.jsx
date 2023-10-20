import { useLoaderData } from "react-router-dom";

const Products = () => {
  const Products = useLoaderData();
  return (
    <div className="grid  gap-5 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 w-fit mx-auto px-2 py-10">
      {Products.map((product) => {
        const {name, image, brand, type, price, rating} = product
        return (
          <div
            key={name}
            className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={image}
                alt="Product"
                className="h-80  w-fit object-cover rounded-t-xl mx-auto"
              />
              <div className="px-4 py-3 ">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {brand}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${price}
                  </p>
                  {/* <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del> */}
                  
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
