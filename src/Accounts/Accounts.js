import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import "./Accounts.css";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Accounts = () => {
  const navigate = useNavigate();

  // ---------------- BAR CHART DATA ----------------
  const data = {
    labels: [
      "Jan 25","Feb 25","Mar 25","Apr 25","May 25",
      "Jun 25","Jul 25","Aug 25","Sep 25","Oct 25",
      "Nov 25","Dec 25"
    ],
    datasets: [
      {
        label: "Monthly Amount",
        data: [3000, 7500, 2000, 3500, 6800, 7200, 1500, 11000, 8500, 1000, 7800, 9000],
        backgroundColor: "#4C78B8",
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        ticks: { color: "#444" },
        grid: { color: "#ddd" }
      },
      x: {
        ticks: { color: "#333" },
        grid: { display: false }
      },
    },
  };

  // ---------------- ICON CARDS ----------------
  const accountItems = [
    {
      title: "Today",
      icon: "/icons/today.png",
    },
    {
      title: "Monthly",
      icon: "/icons/today.png",
    },
    {
      title: "Totals",
      icon: "/icons/today.png",
    },
  ];

  const handleCardClick = (title) => {
    if (title === "Today") navigate("/today");
    if (title === "Monthly") navigate("/monthly");
    if (title === "Totals") navigate("/totals");
  };

  return (
    <div className="accounts-container">

      {/* ---------- TOP BAR ---------- */}
      <div className="accounts-topbar">
        <span className="back-arrow" onClick={() => navigate(-1)}>←</span>
        <h1>Accounts</h1>
      </div>

      {/* ---------- ICON CARDS ---------- */}
      <div className="accounts-grid">
        {accountItems.map((item, index) => (
          <div
            key={index}
            className="accounts-card"
            onClick={() => handleCardClick(item.title)}
          >
            <img src={item.icon} alt={item.title} className="accounts-icon" />
            <p className="accounts-title">{item.title}</p>
          </div>
        ))}
      </div>

      {/* ---------- GRAPH TITLE ---------- */}
      <h2 className="graph-title">Graph 2</h2>

      {/* ---------- BAR CHART ---------- */}
      <div className="chart-wrapper">
        <Bar data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default Accounts;
