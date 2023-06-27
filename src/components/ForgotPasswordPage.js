import React, { useState } from "react";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://crm-app-backend-4iyu.onrender.com/api/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (response.ok) {
                // Password reset email sent successfully, display success message
                console.log("Password reset email sent successfully");
            } else {
                // Password reset email sending failed, display error message
                console.error("Failed to send password reset email");
            }
        } catch (error) {
            console.error("Error sending password reset email:", error);
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

            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ForgotPasswordPage;
