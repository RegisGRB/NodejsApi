import React from "react";
import { Button } from "react-bootstrap";
import AuthLogin from "../services/Auth.service.jsx";
import API from "../utils/API.js";

 class Account extends React.Component {
 constructor(props){
super();
this.StaticRange({
    user:[]
});
this.Auth = new AuthLogin();
const profil = this.Auth.getuserProfil();
console.log(profil);
console.log(this.Auth.getuserDetail(profil.id));
 }
  render() {
    return (
      <div className="Account">
          
      </div>
    );
  }
}

export default Account;