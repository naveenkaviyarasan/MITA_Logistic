import React, { useState } from "react";
// import "./Totals.css";

export default function Total() {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;

  const data = [
    {
      id: 1,
      date: "2023-06-06",
      profileId: "#A001",
      dowProfile: "#D001",
      transactionId: "TXN001",
      amount: "1000",
    },
    {
      id: 2,
      date: "2023-06-06",
      profileId: "#A002",
      dowProfile: "#D002",
      transactionId: "TXN002",
      amount: "2000",
    },
    {
      id: 3,
      date: "2023-06-06",
      profileId: "#A003",
      dowProfile: "#D003",
      transactionId: "TXN003",
      amount: "3000",
    },
    {
      id: 4,
      date: "2023-06-10",
      profileId: "#A004",
      dowProfile: "#D004",
      transactionId: "TXN004",
      amount: "4000",
    },
  ];

  // Filtering with Search + Date
  const filteredData = data.filter((item) => {
    const searchMatch =
      search === "" ||
      item.profileId.toLowerCase().includes(search.toLowerCase()) ||
      item.transactionId.toLowerCase().includes(search.toLowerCase());

    const fromMatch = fromDate === "" || item.date >= fromDate;
    const toMatch = toDate === "" || item.date <= toDate;

    return searchMatch && fromMatch && toMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="total-container">
      {/* Header */}
      <div className="total-header">Totals</div>

      {/* Search + Filters */}
      <div className="filters-box">
        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
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
              onChange={(e) => {
                setFromDate(e.target.value);
                setPage(1);
              }}
              className="date-input"
            />
          </div>

          <span className="date-dash">-</span>

          <div className="date-box">
            <span className="date-icon">📅</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value);
                setPage(1);
              }}
              className="date-input"
            />
          </div>
        </div>
      </div>
<br></br>
      {/* Table */}
      <div className="today-table-wrapper">
        <table className="today-table">
          <thead>
            <tr>
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
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr key={row.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{startIndex + idx + 1}</td>
                  <td>{row.date}</td>
                  <td>{row.profileId}</td>
                  <td>{row.dowProfile}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-box">
        <button
          className="pagination-btn"
          disabled={page === 1}
          onClick={handlePrev}
        >
          Previous
        </button>

        <span className="page-number">{page}</span>

        <button
          className="pagination-btn"
          disabled={page === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
