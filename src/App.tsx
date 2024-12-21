import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginCard from "./pages/Login/LoginCard";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
