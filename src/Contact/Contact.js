import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    whatsapp: "",
    website: "",
    instagram: "",
    youtube: "",
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      date: "06/06/23",
      whatsapp: "Lorem ipsum dolor sit…",
      website: "Lorem ipsum dolor sit…",
      instagram: "Lorem ipsum dolor sit…",
      youtube: "Lorem …",
    },
    {
      id: 2,
      date: "06/06/23",
      whatsapp: "",
      website: "",
      instagram: "",
      youtube: "",
    },
    {
      id: 3,
      date: "06/06/23",
      whatsapp: "",
      website: "",
      instagram: "",
      youtube: "",
    },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      id: tableData.length + 1,
      date: new Date().toLocaleDateString(),
      ...form,
    };

    setTableData([...tableData, newRow]);

    setForm({
      whatsapp: "",
      website: "",
      instagram: "",
      youtube: "",
    });
  };

  return (
    <div className="contact-container">
      {/* Title */}
      <div className="top-bar">
        <span className="back-arrow">←</span>
        <h1>Contact Details</h1>
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-item">
            <label>what's number</label>
            <input
              type="text"
              name="whatsapp"
              placeholder="Enter your number"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label>Website Link</label>
            <input
              type="text"
              name="website"
              placeholder="Enter your link"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label>Instagram Link</label>
            <input
              type="text"
              name="instagram"
              placeholder="Enter your link"
              value={form.instagram}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-items">
            <label>YouTube Link</label>
            <input
              type="text"
              name="youtube"
              placeholder="Enter your link"
              value={form.youtube}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>

      {/* Table */}
      <table className="contact-table">
        <thead>
          <tr>
            <th>All</th>
            <th>No.</th>
            <th>Date</th>
            <th>what's number</th>
            <th>Website Link</th>
            <th>Instagram Link</th>
            <th>YouTube Link</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{row.id}</td>
              <td>{row.date}</td>
              <td>{row.whatsapp}</td>
              <td>{row.website}</td>
              <td>{row.instagram}</td>
              <td>{row.youtube}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button>‹ Previous</button>
        {/* <span>1</span> */}
        <button>1</button>
        <button>Next ›</button>
      </div>
    </div>
  );
};

export default Contact;
