"import React from "react";
import Bootstrap from "./Components/Bootstrap";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Bootstrap />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </div>
  );
};"

export default App;

// <--------------------------------------------------------------->
