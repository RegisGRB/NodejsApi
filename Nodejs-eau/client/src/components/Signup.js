import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../utils/API";

class Signup extends React.Component {
  state = {
    email: "er@er.er",
    firstname:"er",
    lastname:"er",
    password: "er",
    cpassword: "er"

  };
  send = async () => {
    const { email, firstname,lastname,password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email,firstname,lastname,password });
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
  };
  render() {
    const { email, firstname,lastname,password, cpassword } = this.state;
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
        <FormGroup controlId="firstname" bsSize="large">
          <ControlLabel>firstname</ControlLabel>
          <FormControl
            value={firstname}
            onChange={this.handleChange}
            type="firstname"
          />
        </FormGroup>
        <FormGroup controlId="lastname" bsSize="large">
          <ControlLabel>lastname</ControlLabel>
          <FormControl
            value={lastname}
            onChange={this.handleChange}
            type="lastname"
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
        <FormGroup controlId="cpassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block bsSize="large" type="submit">
          Inscription
        </Button>
      </div>
    );
  }
}

export default Signup;