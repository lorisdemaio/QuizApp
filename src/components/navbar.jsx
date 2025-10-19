import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useUserData } from "../hook/userData";

export default function Navbar() {

    const { userData } = useUserData();
    const [link, setLink] = useState(false);
    const [nav, setNav] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname !== "/") setLink(true);
        else setLink(false);

        if(location.pathname === "/login" || location.pathname === "/register") setNav(false);
        else setNav(true);

    }, [location.pathname]);

    return(
        <>
            <nav className={`${nav ? 'flex' : 'hidden'}`}>
                <div>
                   {
                        link ? 
                        (
                            <Link to="/" className="flex items-center gap-2 text-2xl font-bold" tabIndex={0}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                </svg>
                                Home
                            </Link>
                        ) :
                        (
                             <span className="text-2xl font-bold">
                                <span className="text-blue-900">Quiz</span>App
                             </span>
                        )
                   }
                </div>

                {
                    userData ?
                    (
                        <Link className="flex gap-2 items-center cursor-pointer" to="/profilo" tabIndex={0}>
                            <span className="font-semibold">
                                {userData.username}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1c398e" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </Link>
                    ) :
                    (
                        <div className="flex gap-2">
                            <Link to="/register" className="iconButton" tabIndex={0}>
                                Register
                            </Link>
                            <Link to="/login" className="iconButton-primary" tabIndex={0}>
                                Login
                            </Link>
                        </div>
                    )
                }
            </nav>
        </>
    );
}