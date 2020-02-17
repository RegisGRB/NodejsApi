import React from "react";

import "./App.css";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Routes from "./Route.js";
import API from "./utils/API.js";
function App() {
  return (
    <div className="App">
      <Header isLoggedIn={isLog()} isAdmin={isAdminx()}/>
      <Routes isLoggedIn={isLog()} isAdmin={isAdminx()}/>
      <Footer />
    </div>
  );
}

function isLog(){
  const isLog = localStorage.getItem("token");
  
  return isLog;
}

function isAdminx(){
  const isAdmin = localStorage.getItem("admin");
  if(isAdmin===undefined){
    return false;
  }
  return isAdmin;
}
export default App;
