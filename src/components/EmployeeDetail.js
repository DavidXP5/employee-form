import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetail(props) {
  const { id } = useParams();

  const employee = props.employees.find(
    (e) => String(e.EmployeeId) === String(id)
  );

  if (!employee) {
    return (
      <div>
        <h1>Employee Detail</h1>
        <p>Employee not found.</p>
        <Link to="/">Back to Employee Form</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>Employee Detail</h1>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>

      <Link to="/">Back to Employee Form</Link>
    </div>
  );
}

export default EmployeeDetail;
