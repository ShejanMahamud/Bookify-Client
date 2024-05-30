import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const {isAdmin, isAdminLoading} = useAdmin();
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace={true}></Navigate>

};

export default AdminRoute;