import React, { useState } from "react";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userType, setUserType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://crm-app-backend-4iyu.onrender.com/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    userType,
                }),
            });

            if (response.ok) {
                // Registration successful, redirect or show success message
                console.log("Registration successful");
            } else {
                // Registration failed, display error message
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error registering user:", error);
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

            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="userType">User Type:</label>
            <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}>
                <option value="">Select User Type</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
            </select>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
