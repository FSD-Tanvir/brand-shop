import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    //get field values
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-error underline">
            Login Now!
          </h1>
          <form onSubmit={handleLogin} className="mt-6">
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
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-error bg-white border rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-error hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                className="w-full  btn btn-error btn-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Do not have an account?{" "}
            <Link
              to={"/register"}
              className="font-medium text-error hover:underline"
            >
              Register
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
