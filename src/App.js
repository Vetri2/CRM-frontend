import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
// import ResetPasswordPage from "./components/ResetPasswordPage";
import DashboardPage from "./components/DashboardPage";
import LeadsPage from "./components/LeadsPage";
import ServiceRequestsPage from "./components/ServiceRequestsPage";
import ContactsPage from "./components/ContactsPage";
import AppContextProvider from "./AppContextProvider"; // Import the AppContextProvider

const App = () => {
    return (
        <Router>
            <AppContextProvider>
                {" "}
                {/* Wrap the entire app with the AppContextProvider */}
                <div>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPasswordPage />}
                        />
                        {/* <Route
                            path="/reset-password/:token"
                            element={<ResetPasswordPage />}
                        /> */}
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/leads" element={<LeadsPage />} />
                        <Route
                            path="/service-requests"
                            element={<ServiceRequestsPage />}
                        />
                        <Route path="/contacts" element={<ContactsPage />} />
                    </Routes>
                </div>
            </AppContextProvider>
        </Router>
    );
};

export default App;
