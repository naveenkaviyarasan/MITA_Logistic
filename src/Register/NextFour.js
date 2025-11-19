import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextThree.css";

const NextFour = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirm: "",
    });

      const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
      navigate("/nextfour");
  };

  const handleNext = () => {
    // navigate("/total");
  };

  

  return (
    <div className="three-container">
      <h1 className="three-title">Register</h1>
            <form className="register-content" onSubmit={handleSubmit}>

                 <input
          type="text"
          name="email"
          className="email"
          placeholder="email"
          value={formData.name}
          onChange={handleChange}
        />

<input
          type="text"
          name="password"
          className="password"
          placeholder="password"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="confirmpin"
          className="confirmpin"
          placeholder="confirmpin"
          value={formData.name}
          onChange={handleChange}
        />

         {/* Buttons */}
        <div className="btn-row">
          <button className="prev-btn" onClick={() => navigate(-1)}>
            « Previous
          </button>

          <button className="next-btn" onClick={handleNext}>
            Submit »
          </button>
        </div>
</form>
    </div>
  );
};

export default NextFour;
