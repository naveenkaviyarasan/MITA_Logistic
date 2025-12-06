import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    subDistrict: "",
  });

  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.phone) {
      alert("Please fill Name & Phone");
      return;
    }

    const today = new Date().toLocaleDateString("en-GB");

    const newRow = {
      id: count,
      date: today,
      profileId: "#A001",
      ...form
    };

    setRows([...rows, newRow]);
    setCount(count + 1);

    setForm({
      name: "",
      phone: "",
      email: "",
      district: "",
      subDistrict: "",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <span className="back-btn">←</span>
        <h2>Role Access</h2>
      </div>

      <div className="form-section">
        <h3>Create Role Access</h3>
        <div className="form-row">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email id" />
          <input name="district" value={form.district} onChange={handleChange} placeholder="District" />
          <input name="subDistrict" value={form.subDistrict} onChange={handleChange} placeholder="SubDistrict" />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>All</th>
              <th>No.</th>
              <th>Date</th>
              <th>Profile id</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email id</th>
              <th>District</th>
              <th>SubDistrict</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.profileId}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email || "-"}</td>
                <td>{item.district || "-"}</td>
                <td>{item.subDistrict || "-"}</td>
                <td className="view-icon" onClick={() => navigate(`/AccessPage/${item.id}`)}>
                  👁
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="pg-btn">‹ Previous</button>
          <button className="pg-btn">Next ›</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
