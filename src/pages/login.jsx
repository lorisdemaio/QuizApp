import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Section from "../components/section";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === "success")
            {
                const userData = jwtDecode(data.token);
                localStorage.setItem("token", JSON.stringify(userData));
                navigate("/");
            }
            else alert(data.mex);
        });
    }

    return (
        <>
            <Section
                height="100dvh"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                SectionClass="form_page"
            >
                <form onSubmit={handleLogin}>
                    <div className="text-center" style={{ marginBottom: "1rem" }}>
                        <h1 className="text-white text-3xl font-bold">
                            QuizApp | Login
                        </h1>
                    </div>
                    <div>
                        <label htmlFor="email_field">
                            Email
                        </label>
                        <input 
                            id="email_field"
                            name="email" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password_field">
                            Password
                        </label>
                        <input 
                            id="password_field"
                            name="password" 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <p>
                            Non hai un account? <Link to="/register" tabIndex={0} className="text-blue-400">registrati</Link>
                        </p>
                    </div>
                    <button type="submit" className="btn w-full">
                        Accedi
                    </button>
                </form>
            </Section>
        </>
    );
}