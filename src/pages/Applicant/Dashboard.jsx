import { Button, Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Initialize new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Approved", "Pending", "Rejected", "Permits"],
        datasets: [
          {
            label: "Number of Applications",
            data: [120, 45, 30, 25],
            backgroundColor: [
              "rgba(75, 192, 192, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Application Status Overview" },
        },
        scales: { y: { beginAtZero: true } },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">

              {/* All Applications Card */}
              <InfoCard
                title="All Applications"
                subtitle="| Today"
                icon="bi-layers"
                value="145"
                change="12%"
                changeType="increase"
              />

              {/* Pending Applications Card */}
              <InfoCard
                title="Pending Applications"
                subtitle="| This Month"
                icon="bi-clock-history"
                value="$3,264"
                change="8%"
                changeType="increase"
              />

              {/* Approved Applications Card */}
              <InfoCard
                title="Approved Applications"
                subtitle="| This Year"
                icon="bi-check-circle"
                value="1244"
                change="12%"
                changeType="decrease"
              />

              {/* Rejected Applications Card */}
              <InfoCard
                title="Rejected Applications"
                subtitle="| This Year"
                icon="bi-x-circle"
                value="1244"
                change="12%"
                changeType="decrease"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <div className="w-full max-w-md mx-auto mt-5">
        <canvas ref={chartRef} height="120"></canvas>
      </div>
    </>
  );
};

// Reusable InfoCard component
const InfoCard = ({ title, subtitle, icon, value, change, changeType }) => (
  <div className="col-xxl-3 col-md-6">
    <div className="card info-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start"><h6>Filter</h6></li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title} <span>{subtitle}</span></h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className={`bi ${icon}`}></i>
          </div>
          <div className="ps-3">
            <h6>{value}</h6>
            <span className={`text-${changeType === 'increase' ? 'success' : 'danger'} small pt-1 fw-bold`}>{change}</span>
            <span className="text-muted small pt-2 ps-1">{changeType}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
