import React from "react";

import Search from "./Search";
import intialData from "../data/intialData";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Search details={intialData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
