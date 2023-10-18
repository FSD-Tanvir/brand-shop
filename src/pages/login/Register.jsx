import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-error underline">
            Register Now!
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-error bg-white border rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-error bg-white border rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="img"
                className="block text-sm font-semibold text-gray-800"
              >
                Image URL
              </label>
              <input
                type=""
                name="img"
                className="block w-full px-4 py-2 mt-2 text-error bg-white border rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-error bg-white border rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button className="w-full  btn btn-error btn-outline">
                Register
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Do you have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-error hover:underline"
            >
              Login
            </Link>
          </p>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Register;
