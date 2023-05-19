import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import MyPage from "./pages/user/mymap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;

