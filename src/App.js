import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";


function App() {
  const [employees, setEmployees] = useState([]);
  const hasLoaded = useRef(false);


  // Load employees from localStorage when app starts
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
    setTimeout(() => {
      hasLoaded.current = true;
    }, 0)
     
  }, []);

  // Save employees to localStorage whenever employees changes
  useEffect(() => {
    if (!hasLoaded.current) return; 
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

function addEmployee(employee) {
  const employeeWithId = {
    ...employee,
    EmployeeId: Date.now(),
  };

  console.log("addEmployee received:", employeeWithId);

  setEmployees((prevEmployees) => [
    ...prevEmployees,
    employeeWithId,
  ]);
}

return (
  <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
    <header style={{ marginBottom: "18px" }}>
      <h1 style={{ margin: 0 }}>Employee Management</h1>
      <p style={{ marginTop: "6px" }}>
        Add employees, view the list, and review employee details.
      </p>
    </header>

    <Routes>
      <Route
        path="/"
        element={
          <div style={{ display: "grid", gap: "18px" }}>
            <section style={{ border: "1px solid #ddd", padding: "16px" }}>
              <h2 style={{ marginTop: 0 }}>New Employee</h2>
              <EmployeeForm addEmployee={addEmployee} />
            </section>

            <section style={{ border: "1px solid #ddd", padding: "16px" }}>
              <h2 style={{ marginTop: 0 }}>Employee List</h2>
              <EmployeeList employees={employees} />
            </section>
          </div>
        }
      />

      <Route
        path="/employees/:id"
        element={<EmployeeDetail employees={employees} />}
      />
    </Routes>
  </div>
);





}

export default App;
