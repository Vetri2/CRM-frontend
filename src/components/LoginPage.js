import React, { useState, useContext } from "react";
import { AppContext } from "../AppContextProvider";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } = useContext(AppContext); // Access the token setter from the app context

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login request to the backend
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: email, password }),
            });

            if (response.ok) {
                const { token } = await response.json();
                setToken(token); // Store the token in the app context
                // TODO: Redirect to the desired page or perform additional actions
            } else {
                const { message } = await response.json();
                console.log("Login failed:", message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
