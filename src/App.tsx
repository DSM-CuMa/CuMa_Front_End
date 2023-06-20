import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import {Cookies} from 'react-cookie'

// Pages
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import MyPage from "./pages/user/mymap";

function App() {

  axios.defaults.baseURL = "http://localhost:3001";

  const cookies = new Cookies();

  const setCookie = (name: string, value: string, options?: any) => {
    return cookies.set(name, value, {...options}); 
  }

  const getCookie = (name: string) => {
    return cookies.get(name); 
  }
  
  useEffect(()=>{
    if(getCookie("atk")) 
      axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie("atk")}`
    else if(getCookie("rtk"))
      axios.post("/token/refresh", {refresh_token: getCookie("rtk")})
        .then(res => {
          setCookie("rtk", res.data.access_token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
        })
  },[])

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

