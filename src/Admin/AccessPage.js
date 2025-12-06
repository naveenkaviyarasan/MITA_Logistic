import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AccessPage.css";

const permissionsList = [
  "Register", "Feedback",
  "User Pending", "Contact Details",
  "Total User", "Accounts",
  "Terms & condition", "Help",
  "Notifications", "Delete account"
];

const AccessPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [permissions, setPermissions] = useState(
    permissionsList.reduce((acc, cur) => ({ ...acc, [cur]: true }), {})
  );

  const togglePermission = (name) => {
    setPermissions({
      ...permissions,
      [name]: !permissions[name],
    });
  };

  const handleSubmit = () => {
    console.log("User ID:", id);
    console.log("Permissions:", permissions);
    alert("Permissions Updated!");
    navigate("/");
  };

  return (
    <div className="access-container">
      <div className="header">
        <span className="back-btn" onClick={() => navigate(-1)}>←</span>
        <h2>Role Access</h2>
      </div>

      <div className="access-box">
        <div className="access-header">Access</div>

        <div className="access-grid">
          {permissionsList.map((item, index) => (
            <div className="row" key={index}>
              <span>{item}</span>
              <input
                type="checkbox"
                checked={permissions[item]}
                onChange={() => togglePermission(item)}
              />
            </div>
          ))}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AccessPage;
