import React from "react";

import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="mt-5">Employee Management Software</h1>
          <div className="d-flex gap-3 my-5">
            <button
              onClick={() => setIsAdding(true)}
              type="button"
              className="btn btn-secondary"
            >
              Add Employee
            </button>
            <Logout setIsAuthenticated={setIsAuthenticated} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
