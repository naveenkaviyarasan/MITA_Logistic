import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";


const Register = () => {
      const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    education: "",
    gender: "",
    dob: "",
    tob: "",
    height: "",
    weight: "",
    bodyType: "",
    bodyColour: "",
    konguKulam: "",
    district: "",
    subdistrict: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
      navigate("/next");
  };
  

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Register</h1>

      <form className="register-content" onSubmit={handleSubmit}>
        
        {/* Name */}
        <input
          type="text"
          name="name"
          className="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Phone Numbers */}
        <div className="two-col">
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div>
          
          <input
            type="text"
            name="altPhone"
            placeholder="Alternative Phone number"
            value={formData.altPhone}
            onChange={handleChange}
          />
        </div>

        {/* Education */}
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        />

        {/* Gender */}
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        {/* DOB & TOB */}
        <div className="two-col">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <input
            type="time"
            name="tob"
            value={formData.tob}
            onChange={handleChange}
          />
        </div>

        {/* Height & Weight */}
        <div className="two-col">
          <select name="height" value={formData.height} onChange={handleChange}>
            <option value="">Height</option>
            <option value="150">150 cm</option>
            <option value="160">160 cm</option>
            <option value="170">170 cm</option>
          </select>

          <select name="weight" value={formData.weight} onChange={handleChange}>
            <option value="">Weight</option>
            <option value="50">50 kg</option>
            <option value="60">60 kg</option>
            <option value="70">70 kg</option>
          </select>
        </div>

        {/* Body Type & Colour */}
        <div className="two-col">
          <select
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
          >
            <option value="">Body Type</option>
            <option value="Slim">Slim</option>
            <option value="Average">Average</option>
            <option value="Healthy">Healthy</option>
          </select>

          <select
            name="bodyColour"
            value={formData.bodyColour}
            onChange={handleChange}
          >
            <option value="">Body Colour</option>
            <option value="Fair">Fair</option>
            <option value="Medium">Medium</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Kongu Kulam */}
        <select
          name="konguKulam"
          value={formData.konguKulam}
          onChange={handleChange}
        >
          <option value="">Kongu Kulam</option>
          <option value="Gounder">Gounder</option>
          <option value="Vellalar">Vellalar</option>
        </select>

        {/* District */}
        <select
          name="district"
          value={formData.district}
          onChange={handleChange}
        >
          <option value="">District</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Salem">Salem</option>
        </select>

        {/* Subdistrict */}
        <select
          name="subdistrict"
          value={formData.subdistrict}
          onChange={handleChange}
        >
          <option value="">Subdistrict</option>
          <option value="Tirupur">Tirupur</option>
          <option value="Pollachi">Pollachi</option>
        </select>

        <button type="submit" className="next-btn">
          Next »
        </button>
      </form>
    </div>
  );
};

export default Register;
