import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextThree.css";

const NextThree = () => {
  const navigate = useNavigate();

  // Dropdown states
  const [career, setCareer] = useState({
    employed: "",
    occupation: "",
    income: "",
    workLocation: "",
  });

  // Image states
  const [photos, setPhotos] = useState({
    profile1: null,
    profile2: null,
    community: null,
    idFront: null,
    idBack: null,
    jathagamFull: null,
    jathagamKattam: null,
  });

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setCareer((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setPhotos((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    }
  };

  const chooseFile = (key) => {
    document.getElementById(key).click();
  };

  const handleNext = () => {
    navigate("/nextfour");
  };

  return (
    <div className="three-container">

      <h1 className="three-title">Register</h1>

      <div className="form-section">

        {/* Career Details */}
        <label className="section-label">Career Details</label>

        <select
          name="employed"
          value={career.employed}
          onChange={handleSelect}
          className="three-select"
        >
          <option value="">Employed</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <select
          name="occupation"
          value={career.occupation}
          onChange={handleSelect}
          className="three-select"
        >
          <option value="">Occupation</option>
          <option value="private">Private Job</option>
          <option value="government">Government Job</option>
          <option value="business">Business</option>
        </select>

        <select
          name="income"
          value={career.income}
          onChange={handleSelect}
          className="three-select"
        >
          <option value="">Annual Income</option>
          <option value="3">1–3 Lakh</option>
          <option value="6">3–6 Lakh</option>
          <option value="10">6–10 Lakh</option>
          <option value="10+">10+ Lakh</option>
        </select>

        <select
          name="workLocation"
          value={career.workLocation}
          onChange={handleSelect}
          className="three-select"
        >
          <option value="">Work location information</option>
          <option value="chennai">Chennai</option>
          <option value="bangalore">Bangalore</option>
          <option value="abroad">Abroad</option>
        </select>

        {/* Profile Photos */}
        <label className="section-label red">Add profile photo</label>
        <p className="section-caption">
          (Add at least one photo, as people prefer profiles with a photo)
        </p>

        <div className="image-row">
          {["profile1", "profile2"].map((key) => (
            <div className="upload-box" key={key}>
              <input
                type="file"
                id={key}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, key)}
                hidden
              />
              <button className="upload-btn" onClick={() => chooseFile(key)}>
                {photos[key] ? (
                  <img src={photos[key]} alt="Uploaded" className="uploaded-img" />
                ) : (
                  "+"
                )}
              </button>
              <div className="upload-label">Click to add photo</div>
            </div>
          ))}
        </div>

        {/* Community Certificate */}
        <label className="section-label red">Community certificate</label>

        <div className="image-row">
          <div className="upload-box">
            <input
              type="file"
              id="community"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "community")}
              hidden
            />
            <button className="upload-btn" onClick={() => chooseFile("community")}>
              {photos.community ? (
                <img src={photos.community} alt="Uploaded" className="uploaded-img" />
              ) : (
                "+"
              )}
            </button>
            <div className="upload-label">Click to add photo</div>
          </div>
        </div>

        {/* ID Proof */}
        <label className="section-label red">Add id proof photo</label>
        <p className="section-caption">(EX: Aadhar card etc)</p>

        <div className="image-row">
          {[
            { id: "idFront", label: "Frontend" },
            { id: "idBack", label: "Backend" },
          ].map((item) => (
            <div className="upload-box" key={item.id}>
              <div className="upload-text">{item.label}</div>
              <input
                type="file"
                id={item.id}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, item.id)}
                hidden
              />
              <button className="upload-btn" onClick={() => chooseFile(item.id)}>
                {photos[item.id] ? (
                  <img src={photos[item.id]} alt="Uploaded" className="uploaded-img" />
                ) : (
                  "+"
                )}
              </button>
              <div className="upload-label">Click to add photo</div>
            </div>
          ))}
        </div>

        {/* Jathagam */}
        <label className="section-label red">Jathogam</label>

        <div className="image-row">
          {[
            { id: "jathagamFull", label: "Full pic" },
            { id: "jathagamKattam", label: "Jathogam kattam" },
          ].map((item) => (
            <div className="upload-box" key={item.id}>
              <div className="upload-text">{item.label}</div>
              <input
                type="file"
                id={item.id}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, item.id)}
                hidden
              />
              <button className="upload-btn" onClick={() => chooseFile(item.id)}>
                {photos[item.id] ? (
                  <img src={photos[item.id]} alt="Uploaded" className="uploaded-img" />
                ) : (
                  "+"
                )}
              </button>
              <div className="upload-label">Click to add photo</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="btn-row">
          <button className="prev-btn" onClick={() => navigate(-1)}>
            « Previous
          </button>

          <button className="next-btn" onClick={handleNext}>
            Next »
          </button>
        </div>

      </div>
    </div>
  );
};

export default NextThree;
