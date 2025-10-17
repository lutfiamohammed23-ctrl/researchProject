import { Button, Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {

  const [data, setData] = useState([]);

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };


  useEffect(() => {

    const fetchData = async () => {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const res = await axios.get("http://192.168.18.198:8080/api/public/application");
      setData(res.data);
    }
    fetchData();
  }, [])

  const tableColumns = [
    {
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'ApplicationNumber',
      dataIndex: 'applicationNumber',
      key: 'applicationNumber',
    },
    {
      title: 'Research Title',
      dataIndex: ["researchInfo", "title"],
      key: 'title',
    },
    {
      title: "Applicant Name",
      dataIndex: ["applicantInfo", "firstName"],
      key: "applicantName",
      render: (text, record) =>
        `${record.applicantInfo.firstName} ${record.applicantInfo.lastName}`,
    }, {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          style={{
            color:
              text === "DRAFT"
                ? "orange"
                : text === "APPROVED"
                  ? "green"
                  : "red",
            fontWeight: "bold",
          }}
        >
          {text}
        </span>
      ),
    }, {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          {/* <Button type="primary" > */}
          View Details
        </Button>
      ),
    },

  ];

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
          {/* Left side columns */}
          <div className="col-lg-12">
            <div className="row">
              {/* Sales Card */}
              <div className="col-xxl-3 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sales <span>| Today</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart" />
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* End Sales Card */}
              {/* Revenue Card */}
              <div className="col-xxl-3 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Revenue <span>| This Month</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar" />
                      </div>
                      <div className="ps-3">
                        <h6>$3,264</h6>
                        <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* End Revenue Card */}
              {/* Customers Card */}
              <div className="col-xxl-3 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Customers <span>| This Year</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* End Customers Card */}
              <div className="col-xxl-3 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Customers <span>| This Year</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* End Customers Card */}
              {/* Reports */}



            </div>
          </div>{/* End Left side columns */}


        </div>
        <div className="row">
          <Table dataSource={data} columns={tableColumns} />

          {/* Modal for details */}
          <Modal
            title="Application Details"
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={800}
          >
            {selectedRecord && (
              <>
                <Descriptions bordered column={1} size="small">
                  <Descriptions.Item label="Application Number">
                    {selectedRecord.applicationNumber}
                  </Descriptions.Item>
                  <Descriptions.Item label="Application Type">
                    {selectedRecord.applicationType}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status">
                    {selectedRecord.status}
                  </Descriptions.Item>
                  <Descriptions.Item label="Research Title">
                    {selectedRecord.researchInfo?.title}
                  </Descriptions.Item>
                  <Descriptions.Item label="Research Description">
                    {selectedRecord.researchInfo?.description}
                  </Descriptions.Item>
                  <Descriptions.Item label="Applicant Name">
                    {selectedRecord.applicantInfo?.firstName}{" "}
                    {selectedRecord.applicantInfo?.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {selectedRecord.applicantInfo?.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Institution">
                    {selectedRecord.applicantInfo?.institution}
                  </Descriptions.Item>
                  <Descriptions.Item label="Research Start Date">
                    {selectedRecord.researchInfo?.startDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="Research End Date">
                    {selectedRecord.researchInfo?.endDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="Budget">
                    {selectedRecord.researchInfo?.budget}{" "}
                    {selectedRecord.researchInfo?.currency}
                  </Descriptions.Item>
                </Descriptions>
              </>
            )}
          </Modal>


        </div>
      </section>
      {/* </div> */}

    </>
  );
}

export default Dashboard;
