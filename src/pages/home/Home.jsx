import { useLoaderData } from "react-router-dom";
import BrandsSection from "./BrandsSection";
import Banner from "./Banner";
import Review from "./Review";
import MemberShip from "./MemberShip";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner />
      <BrandsSection brands={brands} />
      <Review />
      <MemberShip />
    </div>
  );
};

export default Home;
