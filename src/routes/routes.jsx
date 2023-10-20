import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import MyCart from "../pages/MyCart";
import AddProduct from "../pages/AddProduct";
import Accessories from "../pages/shop/Accesssories";
import Computers from "../pages/shop/Computers";
import Phones from "../pages/shop/Phones";
import Products from "../pages/Products";
import Details from "../pages/Details";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/brands.json')
      },
      {
        path: "/phones",
        element: <Phones />,
      },
      {
        path: "/computers",
        element: <Computers />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/:brandName",
        element: <Products />,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.brandName}`),
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

export default routes;
