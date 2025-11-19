import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextPage.css";

// If the image is inside public/icons/bill.png → DO NOT IMPORT
// Use: <img src="/icons/bill.png" />

const NextPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    aadharAddress: "",
    expectation: "",
    gender: "",
    dob: "",
    tob: "",
    rasi: "",
    natchathiram: "",
    propertyValue: "",
    acresValue: "",
  });

  const [brothersMarried, setBrothersMarried] = useState(0);
  const [brothersUnmarried, setBrothersUnmarried] = useState(0);
  const [sistersMarried, setSistersMarried] = useState(0);
  const [sistersUnmarried, setSistersUnmarried] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const counter = (value, setValue, delta) => {
    const next = value + delta;
    if (next >= 0) setValue(next);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      brothersMarried,
      brothersUnmarried,
      sistersMarried,
      sistersUnmarried,
    };

    console.log("Submitting:", payload);
    navigate("/nextthree");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Register</h1>

      <form className="register-content" onSubmit={handleSubmit}>
        <input
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Father name"
          className="big-input"
        />

        <input
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Mother name"
          className="big-input"
        />

        <textarea
          name="aadharAddress"
          value={formData.aadharAddress}
          onChange={handleChange}
          placeholder="Enter Aadhar card address"
          className="big-textarea"
          rows={3}
        />

        <textarea
          name="expectation"
          value={formData.expectation}
          onChange={handleChange}
          placeholder="Expectation"
          className="big-textarea"
          rows={4}
        />

        {/* Sibling Header */}
        <div className="sibling-header">
          <span className="sibling-title">Sibling Information</span>
        </div>

        {/* IMAGE */}
        <div className="sibling-image-wrap">
          {/* <img
            src="/icons/bill.png"   // ← Image correctly loaded from public folder
            alt="Sibling layout diagram"
            className="sibling-image"
          /> */}
          {/* <div className="sibling-image-caption">
            Schematic: Married / Unmarried counters
          </div> */}
        </div>

        {/* Sibling counters */}
        <div className="siblings-grid">
          <div className="sibling-block">
            <div className="sibling-label">Brother(s) — Married</div>
            <div className="counter">
              <button type="button" onClick={() => counter(brothersMarried, setBrothersMarried, -1)}>
                -
              </button>
              <div className="counter-value">{brothersMarried}</div>
              <button type="button" onClick={() => counter(brothersMarried, setBrothersMarried, +1)}>
                +
              </button>
            </div>
          </div>

          <div className="sibling-block">
            <div className="sibling-label">Brother(s) — Unmarried</div>
            <div className="counter">
              <button type="button" onClick={() => counter(brothersUnmarried, setBrothersUnmarried, -1)}>
                -
              </button>
              <div className="counter-value">{brothersUnmarried}</div>
              <button type="button" onClick={() => counter(brothersUnmarried, setBrothersUnmarried, +1)}>
                +
              </button>
            </div>
          </div>

          <div className="sibling-block">
            <div className="sibling-label">Sister(s) — Married</div>
            <div className="counter">
              <button type="button" onClick={() => counter(sistersMarried, setSistersMarried, -1)}>
                -
              </button>
              <div className="counter-value">{sistersMarried}</div>
              <button type="button" onClick={() => counter(sistersMarried, setSistersMarried, +1)}>
                +
              </button>
            </div>
          </div>

          <div className="sibling-block">
            <div className="sibling-label">Sister(s) — Unmarried</div>
            <div className="counter">
              <button type="button" onClick={() => counter(sistersUnmarried, setSistersUnmarried, -1)}>
                -
              </button>
              <div className="counter-value">{sistersUnmarried}</div>
              <button type="button" onClick={() => counter(sistersUnmarried, setSistersUnmarried, +1)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="row-two">
          <div className="col">
            <label className="label">Rasi</label>
            <select
              name="rasi"
              value={formData.rasi}
              onChange={handleChange}
              className="big-input"
            >
              <option value="">Select</option>
              <option value="mesha">Mesha</option>
              <option value="rishabha">Rishabha</option>
            </select>
          </div>

          <div className="col">
            <label className="label">Natchathiram</label>
            <select
              name="natchathiram"
              value={formData.natchathiram}
              onChange={handleChange}
              className="big-input"
            >
              <option value="">Select</option>
              <option value="ashwini">Ashwini</option>
              <option value="bharani">Bharani</option>
            </select>
          </div>
        </div>

        <div className="row-two">
          <div className="col">
            <label className="label">Property value</label>
            <select
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
              className="big-input"
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col">
            <label className="label">Acres value</label>
            <select
              name="acresValue"
              value={formData.acresValue}
              onChange={handleChange}
              className="big-input"
            >
              <option value="">Select</option>
              <option value="0">0</option>
              <option value="1">1 - 5</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>

        {/* Prev + Next Buttons */}
        <div className="buttons-row">
          <button type="button" className="prev-btn" onClick={() => navigate(-1)}>
            « Previous
          </button>

          <button type="submit" className="next-btn">
            Next »
          </button>
        </div>
      </form>
    </div>
  );
};

export default NextPage;
