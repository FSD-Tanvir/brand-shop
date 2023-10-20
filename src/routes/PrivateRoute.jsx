import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // we have to wait here
  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-semibold md:text-7xl">Loading...</h1>
      </div>
    );
  //

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
