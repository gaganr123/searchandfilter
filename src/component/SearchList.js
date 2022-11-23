import React from "react";
import Cardm from "./Cardm";
const SearchList = ({ filteredPersons }) => {
  const filtered = filteredPersons.map((person) => (
    <Cardm key={person.id} person={person} />
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div>{filtered}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
