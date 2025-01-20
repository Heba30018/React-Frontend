import React, { useState } from "react";
import {  Routes, Route } from "react-router-dom";


import Login from "./components/Login";
import Register from "./components/Register";

import Home from "./components/Home";

function App() {
  const [userRole, setUserRole] = useState("");

  return (
      <Routes>
        <Route path="/" element={<Register  />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/home" element={<Home userRole={userRole} />} />
      </Routes>
  );
}

export default App;

