import React from "react";
import "./EmployeeForm.css";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      department: ""
    };
  }

  // Placeholder for future form handling methods

  handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  this.props.addEmployee(this.state);
  console.log(this.state);

  this.setState({
    name: "",
    email: "",
    title: "",
    department: ""
  });
};


  render() {
    return (
      <form className="employee-form"onSubmit={this.handleSubmit}>
        <h2>New Employee</h2>

        <input
      type="text"
      name="name"
      placeholder="Name"
      value={this.state.name}
      onChange={this.handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={this.state.email}
      onChange={this.handleChange}
    />

    <input
      type="text"
      name="title"
      placeholder="Job Title"
      value={this.state.title}
      onChange={this.handleChange}
    />

    <input
      type="text"
      name="department"
      placeholder="Department"
      value={this.state.department}
      onChange={this.handleChange}
    />

    <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;
