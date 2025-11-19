import React, { useState } from "react";
import "./Help.css";

const Help = () => {
  const [form, setForm] = useState({
    title: "",
    input: "",
    file: null,
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      date: "06/06/23",
      file: "sample1.png",
      title: "Help sample",
      input: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      date: "06/06/23",
      file: null,
      title: "Another help",
      input: "Lorem text",
    },
    {
      id: 3,
      date: "06/06/23",
      file: "sample2.png",
      title: "Help Info",
      input: "Testing input here",
    },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: tableData.length + 1,
      date: new Date().toLocaleDateString(),
      file: form.file ? URL.createObjectURL(form.file) : null,
      title: form.title,
      input: form.input,
    };

    setTableData([...tableData, newEntry]);

    setForm({ title: "", input: "", file: null });
  };

  return (
    <div className="help-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="back-arrow">←</span>
        <h1>Help</h1>
      </div>

      {/* Form */}
      <form className="help-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h4>Help Title</h4>
            <input
              type="text"
              name="title"
              placeholder="Enter help title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="upload">
            <h4>Upload Video/Image</h4>
            <input type="file" onChange={handleFile} className="file-input" />
          </div>
        </div>

        <div className="full-row">
          <h4>Help Input</h4>
          <textarea
            name="input"
            placeholder="Enter help"
            value={form.input}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
        <br></br>
      </form>

      {/* Table */}
      <table className="help-table">
        <thead>
          <tr>
            <th>All</th>
            <th>No.</th>
            <th>Date</th>
            <th>Help Video</th>
            <th>Help Title</th>
            <th>Help Input</th>
            <th>Edit</th>
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
              <td>
                {row.file ? (
                  <img
                    src={row.file}
                    alt="upload"
                    className="thumbnail"
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>{row.title}</td>
              <td>{row.input}</td>
              <td>
                <span className="edit-icon">✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button>‹ Previous</button>
        <span>1</span>
        <button>2</button>
        <button>Next ›</button>
      </div>
    </div>
  );
};

export default Help;
