import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/main";

function App() {
  const 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
