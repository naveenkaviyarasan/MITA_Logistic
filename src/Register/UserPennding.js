import React, { useState } from "react";
import "./UserPennding.css";

export default function Total() {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const data = [
    { no: 1, date: "06/06/23", kyc: "#A001" },
    { no: 2, date: "06/06/23", kyc: "#A001" },
    { no: 3, date: "06/06/23", kyc: "#A001" },
  ];

  return (
    <div className="total-container">
      {/* Header */}
      <div className="total-header">User Pending</div>

      {/* Search + Filters */}
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
{/* <br></br> */}
        {/* <button className="reject-btn">Reject</button> */}
      </div>
      <br></br>
<div>
<button className="reject-btn" style={{ marginLeft: "20px" }}>
  Reject
</button>
</div>
      {/* Table */}
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Reg Date</th>
              <th>KYC Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Kulam</th>
              <th>District</th>
              <th>Rasi</th>
              <th>Nakshatram</th>
              <th>Acres</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>Annual Income</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td>{row.date}</td>
                <td>{row.kyc}</td>

                {/* Empty Columns */}
                {Array(10)
                  .fill(null)
                  .map((_, idx) => (
                    <td key={idx}></td>
                  ))}

                <td className="action-buttons">
                  <button className="view-btn">👁️</button>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-box">
        <button className="pagination-btn">Previous</button>
        <span className="page-number">1</span>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
}
