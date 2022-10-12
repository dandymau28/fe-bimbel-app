import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<PublicRoute />} />
            <Route path="/admin/*" element={<ProtectedRoute />} />
            <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
    );
};

export default IndexRouter;
