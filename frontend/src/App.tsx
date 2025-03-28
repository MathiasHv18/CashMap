import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginCard from "./pages/Login/LoginCard";
import RegisterPage from "./pages/Register/RegisterPage";
import AppMain from "./pages/appMain/AppMain";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginCard />} /> {}
        <Route
          path="/mainPage"
          element={
            <PrivateRoute>
              <AppMain />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
