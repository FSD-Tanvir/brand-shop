import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const allProducts = useLoaderData();
  const { brandName } = useParams();
  const products = allProducts.filter((product) => {
    return product.brand === brandName.toLocaleLowerCase();
  });

  return (
    <div className="grid  gap-5 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 w-fit mx-auto px-2 py-10">
      {products.map((product) => {
        return <Product key={product._id} product={product}></Product>;
      })}
    </div>
  );
};

export default Products;
