import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-dmSans ">
        <Navbar />
        <div>
          <Outlet/>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Root;
