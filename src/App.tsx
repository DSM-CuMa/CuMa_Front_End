import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

