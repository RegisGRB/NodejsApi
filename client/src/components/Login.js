import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../utils/API.js";
import AuthLogin from "../services/Auth.service.jsx";

 class Login extends React.Component {
   constructor(){
     super()
     this.state = {
      email: "wx@wx.wx",
      password: "wx"
     }
     this.Auth=new AuthLogin();
   }
 
  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", data.body.admin);
      window.location = "/Dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
 
    console.log(this.state);
    
  };

  handleSubmit = (event)=>{
    event.preventDefault();
    this.Auth.login(this.state).then((data)=>{
      localStorage.setItem("token",data.token);
      window.location = "/Dashboard";
    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
<FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block bsSize="large" >
          Connexion
    </Button>
      </div>
    );
  }
}

export default Login;