
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
