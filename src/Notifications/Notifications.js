import React, { useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  const [form, setForm] = useState({
    title: "",
    message: "",
    video: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVideo = (e) => {
    setForm({ ...form, video: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="notification-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="back-arrow">←</span>
        <h1>Notification</h1>
      </div>

      {/* Form */}
      <form className="notify-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label>Notification Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter notification title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="column">
            <label>Notification Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideo}
              className="file-input"
            />
          </div>
        </div>

        <div className="full-row">
          <label>Notification</label>
          <textarea
            name="message"
            placeholder="Enter notification"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Notifications;
