import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 items-end sm:items-center">
        <div className="navbar-start flex flex-col-reverse sm:flex-row  items-start sm:items-center gap-3">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn  btn-outline btn-error btn-sm lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-error rounded-box w-52"
            >
              <li>
                <Link to={"/"} className="btn-error">
                  Home
                </Link>
              </li>
              <li>
                <a className="btn-error">Shop</a>
                <ul className="p-2">
                  <li>
                    <Link to={"/phones"} className="btn-error">
                      Phones
                    </Link>
                  </li>
                  <li>
                    <Link to={"/computers"} className="btn-error">
                      Computers
                    </Link>
                  </li>
                  <li>
                    <Link to={"/accessories"} className="btn-error">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/add-product"} className="btn-error">
                  Add Product
                </Link>
              </li>
              <li>
                <Link to={"/my-cart"} className="btn-error">
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex  md:flex-row  items-center gap-3 sm:gap-1">
          <img src="https://i.ibb.co/MSXSktB/gb.jpg" alt="" className="w-12 rounded-full"/>
          <a className=" font-bold normal-case text-2xl sm:text-3xl text-error ">GagetBaari</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <Link to={"/"} className="btn-error">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="btn-error">Shop</summary>
                <ul className="p-2 space-y-1 bg-error">
                  <li>
                    <Link to={"/phones"} className="btn-error">
                      Phones
                    </Link>
                  </li>
                  <li>
                    <Link to={"/computers"} className="btn-error">
                      Computers
                    </Link>
                  </li>
                  <li>
                    <Link to={"/accessories"} className="btn-error">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/add-product"} className="btn-error">
                Add Product
              </Link>
            </li>
            <li>
              <Link to={"/my-cart"} className="btn-error">
                My Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-outline btn-error btn-sm lg:btn-md font-medium lg:text-xl ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
