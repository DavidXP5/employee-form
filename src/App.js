import React, { useEffect, useRef, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

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
    console.log("addEmployee received:", employee);
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  }

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;
