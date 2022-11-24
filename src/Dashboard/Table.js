import React from "react";

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table striped-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Full Name</th>
                  <th>position</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th colSpan={2} className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((employee, i) => (
                    <tr key={employee.id}>
                      <td>{i + 1}</td>
                      <td>{employee.fullName}</td>
                      <td>{employee.position}</td>
                      <td>{employee.email}</td>
                      <td>{formatter.format(employee.salary)}</td>
                      <td>{employee.date} </td>
                      <td className="text-right">
                        <button
                          onClick={() => handleEdit(employee.id)}
                          className="btn btn-secondary"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-left">
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>No Employees</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
