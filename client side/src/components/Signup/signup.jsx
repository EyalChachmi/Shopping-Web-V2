import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
    MDBContainer,
  } from "mdb-react-ui-kit";

function Sign() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "signup successful") {
                    localStorage.setItem("user", email); // Store user email in local storage
                    setIsLoggedIn(true);
                    history("/", { state: { id: email } });
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    function logout() {
        localStorage.removeItem("user"); // Remove user from local storage
        setIsLoggedIn(false);
        history("/signup");
    }

    return (
        <MDBContainer fluid className="py-5 gradient-custom">
            <div className="login-container">
                <div className="login">
                    {isLoggedIn ? (
                        <>
                            <h1>Welcome, {email}</h1>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <h1>Signup</h1>
                            <form action="POST">
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                <input type="submit" onClick={submit} />
                            </form>
                            <br />
                            <p>OR</p>
                            <br />
                            <Link to="/login">Login Page</Link>
                        </>
                    )}
                </div>
            </div>
        </MDBContainer>
    );
}

export default Sign;
