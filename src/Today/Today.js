import React, { useState } from "react";
import "./Today.css";

export default function Today() {
  const data = [
    { id: 1, date: "06/06/23", profileId: "#A001", dowProfile: "Ice Cream Test", transactionId: "-", amount: "₹ 50" },
    { id: 2, date: "06/06/23", profileId: "#A001", dowProfile: "Ice Cream Test", transactionId: "-", amount: "₹ 50" },
    { id: 3, date: "06/06/23", profileId: "#A001", dowProfile: "Ice Cream Test", transactionId: "-", amount: "₹ 50" },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => page < totalPages && setPage(page + 1);
  const handlePrev = () => page > 1 && setPage(page - 1);

  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="today-container">
      {/* Header */}
      <div className="today-header">
        <button className="back-btn">←</button>
        Today
      </div>

      {/* Table */}
      <div className="today-table-wrapper">
        <table className="today-table">
          <thead>
            <tr>
              {/* <th><input type="checkbox" /></th> */}
              <th>All</th>
            <th>No</th>
              <th>Date</th>
              <th>Profile Id</th>
              <th>Dow Profile Id</th>
              <th>Transaction ID</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={row.id}>
                <td><input type="checkbox" /></td>
                <td>{(page - 1) * itemsPerPage + idx + 1}</td>
                <td>{row.date}</td>
                <td>{row.profileId}</td>
                <td>{row.dowProfile}</td>
                <td>{row.transactionId}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="today-pagination">
        <button
          className="pagination-btn"
          disabled={page === 1}
          onClick={handlePrev}
        >
          ‹ Previous
        </button>
        <span className="page-number">{page} / {totalPages}</span>
        <button
          className="pagination-btn"
          disabled={page === totalPages}
          onClick={handleNext}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}
