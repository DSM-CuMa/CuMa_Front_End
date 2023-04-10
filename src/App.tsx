import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/main";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

