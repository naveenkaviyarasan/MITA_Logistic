import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import SideMenu from "../SideMenu/SideMenu";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === "Dashboard") navigate("/dashboard");
    if (title === "Register") navigate("/register");
    if (title === "User Pending") navigate("/user");
    if (title === "Total User") navigate("/total");
    if (title === "Terms and condition") navigate("/terms");
    if (title === "Feedback") navigate("/feedback");
    if (title === "Contact Details") navigate("/contact");
    if (title === "Accounts") navigate("/accounts");
    if (title === "Help") navigate("/help");
    if (title === "Admin User") navigate("/admin-user");
    if (title === "Notifications") navigate("/notifications");
    if (title === "Bill setup") navigate("/bill-setup");
    if (title === "Delete account") navigate("/delete");
  };

  const dashboardItems = [
    { title: "Register", icon: "/icons/register.png" },
    { title: "User Pending", icon: "/icons/user.png", badge: "70" },
    { title: "Total User", icon: "/icons/user.png", badge: "7K" },
    { title: "Terms and condition", icon: "/icons/terms.png" },
    { title: "Feedback", icon: "/icons/feedback.png" },
    { title: "Contact Details", icon: "/icons/contact.png" },
    { title: "Accounts", icon: "/icons/accounts.png" },
    { title: "Help", icon: "/icons/help.png" },
    { title: "Admin User", icon: "/icons/admin.png", badge: "70" },
    { title: "Notifications", icon: "/icons/notify.png" },
    { title: "Bill setup", icon: "/icons/bill.png" },
    { title: "Delete account", icon: "/icons/delete.png" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-grid">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => handleCardClick(item.title)}
          >
            {item.badge && <span className="badge">{item.badge}</span>}

            <img src={item.icon} alt={item.title} className="card-icon" />

            <p className="card-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
