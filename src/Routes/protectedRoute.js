import { Navigate, Route, Routes } from "react-router-dom";
import CheckAuth from "../Middleware/checkAuth";
import Dashboard from "../Pages/Dashboard";

const ProtectedRoute = () => {
    return (
        <Routes>
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children }) => {
    const authenticated = CheckAuth();
    if (!authenticated) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
