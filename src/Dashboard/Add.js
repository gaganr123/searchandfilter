import React, { useState } from "react";
import Swal from "sweetalert2";
const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!fullName || !position || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      fullName,
      position,
      email,
      salary,
      date,
    };

    employees.push(newEmployee);
    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${fullName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={handleAdd} className="p-3 mt-3">
      <h2 className="text-center">Add details</h2>
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
      <div className="d-flex gap-4">
        <button type="submit" class="btn btn-secondary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setIsAdding(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Add;
