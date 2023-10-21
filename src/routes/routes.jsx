import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import MyCart from "../pages/MyCart";
import AddProduct from "../pages/AddProduct";
import Accessories from "../pages/shop/Accessories";
import Computers from "../pages/shop/Computers";
import Phones from "../pages/shop/Phones";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Update from "../pages/Update";


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
        path: "/myCart",
        element: <MyCart />,
        loader: () => fetch("http://localhost:5000/myCart"),
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
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/products/update/:id",
        element: <Update/>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/update/${params.id}`),
      },
    ],
  },
]);

export default routes;
