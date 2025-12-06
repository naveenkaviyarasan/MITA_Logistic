import React, { useState } from "react";
// import "./Feedback.css";   //

export default function Total() {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // SAMPLE TABLE DATA
  const tableData = [
    {
      id: 1,
      date: "2023-06-06",
      title: "How to reset KYC?",
      input: "User cannot reset KYC",
      file: "https://via.placeholder.com/50", 
    },
    {
      id: 2,
      date: "2023-06-06",
      title: "Login issue",
      input: "User stuck at login",
      file: "",
    },
    {
      id: 3,
      date: "2023-06-06",
      title: "Payment help",
      input: "Payment not processing",
      file: "",
    },
  ];

  return (
    <div className="total-container">
      {/* Header */}
      <div className="total-header">Feedback</div>

      {/* Search + Date Filters */}
      <div className="filters-box">
        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Date Filters */}
        <div className="date-wrapper">
          <div className="date-box">
            <span className="date-icon">📅</span>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="date-input"
            />
          </div>

          <span className="date-dash">-</span>

          <div className="date-box">
            <span className="date-icon">📅</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="date-input"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="help-table">
        <thead>
          <tr>
            <th>All</th>
            <th>No.</th>
            <th>Date</th>
            <th>Profile id</th>
            <th>Feedback Rating</th>
            <th>Feedback</th>
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
                    alt="thumbnail"
                    className="thumbnail"
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>{row.title}</td>
              <td>{row.input}</td>
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
}
