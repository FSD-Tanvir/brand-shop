import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-dmSans ">
        <Navbar />
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Root;
