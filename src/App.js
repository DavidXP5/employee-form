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
  <Router>
    <Routes>
      {/* Same page: Form on top + List below */}
      <Route
        path="/"
        element={
          <>
            <EmployeeForm addEmployee={addEmployee} />
            <EmployeeList employees={employees} />
          </>
        }
      />

      {/* Keep detail page working (if your list links to it) */}
      <Route
        path="/employees/:id"
        element={<EmployeeDetail employees={employees} />}
      />
    </Routes>
  </Router>
);


}

export default App;
