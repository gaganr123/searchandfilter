import React, { useState } from "react";
import SearchList from "./SearchList";

const Search = ({ details }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5 align-items-center">
              <SearchList filteredPersons={filteredPersons} />
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="text-center mt-4">Search any name and email</h2>
      </div>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-lg-4  mt-5">
            <input
              className="form-control"
              type="search"
              placeholder="Search People"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="card">{searchList()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
