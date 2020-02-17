import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Userservice from "../../services/User.service.jsx";
class UserEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
        email: "",
        firstname:"",
        lastname: "",
        admin: false
    };
    this.User = new Userservice();
    const user = this.User.getusersDetail(props.match.params.id);
    user.then(datax => {
      this.setState({
        email: datax.email,
        firstname:datax.firstname,
        lastname:datax.lastname,
        admin: datax.admin,
      });
    });
  }

  send = async () => {
    const { email,firstname,lastname,admin} = this.state;
    try {
      const data = await this.User.Edituser(this.props.match.params.id,{email,firstname,lastname,admin});
     console.log(data)
     window.location = "/UserAll";
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
    const { email, firstname,lastname,admin} = this.state;
    return (

        <div className="Login">
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>email</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="firstname" bsSize="large">
          <ControlLabel>firstname</ControlLabel>
          <FormControl
            value={firstname}
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="lastname" bsSize="large">
          <ControlLabel>lastname</ControlLabel>
          <FormControl
            value={lastname}
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="admin" bsSize="large">
          <ControlLabel>admin</ControlLabel>
          <FormControl
            value={admin}
            onChange={this.handleChange}
            type="boolean"
          />
        </FormGroup>
       
        <Button onClick={this.send} block bsSize="large" type="submit">
          Edit user
        </Button>
      </div>

    );
  }
}

export default UserEdit;
