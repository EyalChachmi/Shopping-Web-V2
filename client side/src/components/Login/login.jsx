import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/", { email, password });
            if (res.data === "exist") {
                localStorage.setItem("user", email);
                setLoggedIn(true);
                navigate("/", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        navigate("/");
    };

    return (
        <div className="login">
            <h1>{loggedIn ? 'Logout' : 'Login'}</h1>
            {!loggedIn ? (
                <>
                    <form action="POST">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <input type="submit" onClick={submit} />
                    </form>
                    <br />
                    <p>OR</p>
                    <br />
                    <Link to="/signup">Signup Page</Link>
                </>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
}

export default Login;
