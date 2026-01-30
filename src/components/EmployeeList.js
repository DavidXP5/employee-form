import React from "react";
import { Link } from "react-router-dom";

function EmployeeList(props) {
  return (
    <div className="employee-list">
      

      {props.employees.length === 0 ? (
        <p>No employees saved yet.</p>
      ) : (
        <ul>
          {props.employees.map((employee) => (
            <li key={employee.EmployeeId}>
              <Link to={`/employees/${employee.EmployeeId}`}>
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
