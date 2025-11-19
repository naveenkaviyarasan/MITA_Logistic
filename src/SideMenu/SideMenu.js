import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: "/icons/dashboard.png", path: "/" },
    { title: "Register", icon: "/icons/register.png", path: "/register" },
    { title: "User pending", icon: "/icons/user.png", path: "/user" },
    { title: "Total User", icon: "/icons/user.png", path: "/total" },
    { title: "Terms & condition", icon: "/icons/terms.png", path: "/terms" },
    { title: "Feedback", icon: "/icons/feedback.png", path: "/feedback" },
    { title: "Contact Details", icon: "/icons/contact.png", path: "/contact" },
    { title: "Account", icon: "/icons/accounts.png", path: "/accounts" },
    { title: "Help", icon: "/icons/help.png", path: "/help" },
    { title: "Admin User", icon: "/icons/admin.png", path: "/admin-user" },
    { title: "Notifications", icon: "/icons/notify.png", path: "/notifications" },
  ];

  return (
    <div className="side-menu">
      {menuItems.map((item, i) => (
        <div
          key={i}
          className="menu-item"
          onClick={() => navigate(item.path)}
        >
          <img src={item.icon} className="menu-icon" alt={item.title} />
          <span className="menu-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
