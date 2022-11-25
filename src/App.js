import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Service from "./component/Service";
import About from "./component/About";
import Home from "./component/Home";
import Api from "./api/Api";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/post" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
