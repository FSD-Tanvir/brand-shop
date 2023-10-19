import { useLoaderData } from "react-router-dom";
import BrandsSection from "./BrandsSection";
// import Banner from "./Banner";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      {/* <Banner/> */}
      <BrandsSection brands={brands}/>
    </div>
  );
};

export default Home;
