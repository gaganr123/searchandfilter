import React, { useState } from "react";
import Swal from "sweetalert2";
const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [fullName, setFullName] = useState(selectedEmployee.fullName);
  const [position, setPosition] = useState(selectedEmployee.position);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!fullName || !position || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      fullName,
      position,
      email,
      salary,
      date,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.fullName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-lg-12">
          <form onSubmit={handleUpdate}>
            <h1>Edit Employee</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                name="fullname"
                class="form-control"
                id="fullName"
                aria-describedby="emailHelp"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Position
              </label>
              <input
                type="text"
                name="position"
                class="form-control"
                id="position"
                aria-describedby="emailHelp"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Salary
              </label>
              <input
                type="number"
                name="salary"
                class="form-control"
                id="salary"
                aria-describedby="emailHelp"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Date
              </label>
              <input
                type="date"
                name="date"
                class="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="d-flex gap-3">
              <button type="submit" class="btn btn-secondary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
