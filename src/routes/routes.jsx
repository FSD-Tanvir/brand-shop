import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import MyCart from "../pages/MyCart";
import AddProduct from "../pages/AddProduct";
import Accessories from "../pages/shop/Accessories";
import Watches from "../pages/shop/Watches";
import Phones from "../pages/shop/Phones";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Update from "../pages/Update";
import PrivateRoute from "../routes/PrivateRoute.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/phones",
        element: <Phones />,
      },
      {
        path: "/watches",
        element: <Watches />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("https://gagetbaari-server.vercel.app/myCart"),
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
        loader: () => fetch(`https://gagetbaari-server.vercel.app/products`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gagetbaari-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/products/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gagetbaari-server.vercel.app/products/update/${params.id}`
          ),
      },
    ],
  },
]);

export default routes;
