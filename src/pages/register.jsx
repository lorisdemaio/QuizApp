import { Link, useNavigate } from "react-router";
import { useState } from "react";
import Section from "../components/section";

export default function Register() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        })
        .then(res => res.json())
        .then(data => navigate("/login"))
        .catch(err => {
            return <div>errore: {err.mex}</div>
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
                <form onSubmit={handleRegister}>
                    <div className="text-center" style={{ marginBottom: "1rem" }}>
                        <h1 className="text-white text-3xl font-bold">
                            QuizApp | Registrati
                        </h1>
                    </div>
                    <div>
                        <label htmlFor="username_field">
                            Username
                        </label>
                        <input 
                            id="username_field"
                            name="username" 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
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
                            Hai un account? <Link to="/login" tabIndex={0} className="text-blue-400">accedi</Link>
                        </p>
                    </div>
                    <button type="submit" className="btn w-full">
                        Registrati
                    </button>
                </form>
            </Section>
        </>
    );
}