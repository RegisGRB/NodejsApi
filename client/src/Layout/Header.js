import React from "react";
import "./scss/Header.scss";

import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div className="Header">
      {RenderHeader(this.props.isLoggedIn,this.props.isAdmin)}
    </div>
    );
  }
}

function RenderHeader(log,admin) {
  const isLoggedIn = log;
  const isAdminx = admin;
  console.log(isLoggedIn);
  console.log(admin);
  if (!isLoggedIn) {
    return (
      <ul className="ulheader">
        <li className="liheader">
          <Link to="/">SignIn</Link>
        </li>
        <li className="liheader">
          <Link to="/Signup">SignUp</Link>
        </li>
      </ul>
    );
  }
  
  if(isLoggedIn && isAdminx==="false"){
    return (
      <ul className="ulheader">
        <li className="liheader">
          <Link to="/DashBoard">DashBoard</Link>
        </li>
      </ul>
    );
  }
  if(isLoggedIn && isAdminx==="true"){
    return (
      <ul className="ulheader">
        <li className="liheader">
          <Link to="/DashBoard">DashBoard</Link>
        </li>
        <li className="liheader">
          <Link to="/Golfcreate">Golfcreate</Link>
        </li>
        <li className="liheader">
          <Link to="/GolfAll">GolfAll</Link>
        </li>
        <li className="liheader">
          <Link to="/UserAll">UserAll</Link>
        </li>
        <li className="liheader">
          <Link to="/Managercreate">Golfcreate</Link>
        </li>
        <li className="liheader">
          <Link to="/ManagerAll">GolfAll</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
