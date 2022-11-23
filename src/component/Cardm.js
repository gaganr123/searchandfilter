import React from "react";

const Cardm = ({ person }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="card p-3 mb-1  my-2 align-items-center w-100">
          <img
            alt={person.name}
            src={process.env.PUBLIC_URL + person.imgPath}
            className="img-fluid"
            height="200px"
            width="200px"
          />
          <h2 className="text-center">{person.name}</h2>
          <p className="text-center">{person.email}</p>
        </div>
      </div>
    </>
  );
};

export default Cardm;
