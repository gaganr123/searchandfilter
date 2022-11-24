import React, { useState, useEffect } from "react";

import Login from "../Login";
import Dashboard from "../Dashboard";
const Service = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col-lg-12">
            {isAuthenticated ? (
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
