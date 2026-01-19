import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector(state => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && !user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
