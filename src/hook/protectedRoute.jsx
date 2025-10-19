import { Navigate } from "react-router";
import { useEffect } from "react";
import { useUserData } from "./userData";

export default function ProtectedRoute({ children }) {
        const { userData, initialized } = useUserData();

        if(!initialized) return null;
        if(!userData) return <Navigate to="/login" replace />;
    
    return children;
}