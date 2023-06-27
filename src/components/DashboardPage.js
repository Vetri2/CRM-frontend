import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider";

const DashboardPage = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const { token } = useContext(AppContext); // Access the token from the context

    useEffect(() => {
        fetch("/api/dashboard", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setDashboardData(data))
            .catch((error) =>
                console.error("Error fetching dashboard data:", error)
            );
    }, [token]);

    if (!dashboardData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Service Requests: {dashboardData.serviceRequests}</h3>
                <h3>Leads: {dashboardData.leads}</h3>
                <h3>Contacts: {dashboardData.contacts}</h3>
            </div>
        </div>
    );
};

export default DashboardPage;
