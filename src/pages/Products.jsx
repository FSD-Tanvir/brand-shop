import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const allProducts = useLoaderData();
  const { brandName } = useParams();
  const products = allProducts.filter((product) => {
    return product.brand === brandName.toLocaleLowerCase();
  });

  if (products.length === 0) {
    return (
      <div className="w-fit mx-auto py-20">
        <img src="https://i.ibb.co/0ZJ4dtn/no-product.jpg" alt="" />
        <p className="text-center text-lg sm:text-2xl">
          Product will be coming soooooon!!!!!
        </p>
      </div>
    );
  }

  return (
    <div className="grid  gap-5 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 w-fit mx-auto px-2 py-10">
      {products.map((product) => {
        return <Product key={product._id} product={product}></Product>;
      })}
    </div>
  );
};

export default Products;
