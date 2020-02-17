import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ManagerService from "../../services/Manager.service.jsx";
class ManagerEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Nom: "",
      Prenom:"",
      Mail:"",
      Tel: ""
    };
    this.Manager = new ManagerService();
    const manager = this.Manager.getmanagersDetail(props.match.params.id);
    manager.then(datax => {
      this.setState({
        Nom: datax.Nom,
        Prenom:datax.Prenom,
        Mail:datax.Mail,
        Tel: datax.Tel,
      });
    });
  }

  send = async () => {
    const { Nom, Prenom, Mail, Tel, } = this.state;
    try {
      const data = await this.Manager.Editmanager(this.props.match.params.id,{ Nom, Prenom,Mail,Tel });
     console.log(data)
     window.location = "/ManagerAll";
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
    const { Nom, Prenom, Mail, Tel } = this.state;
    return (

      <div className="Login">
      <FormGroup controlId="Nom" bsSize="large">
        <ControlLabel>Nom</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          value={Nom}
          onChange={this.handleChange}
        />
      </FormGroup>
      <FormGroup controlId="Prenom" bsSize="large">
        <ControlLabel>Prenom</ControlLabel>
        <FormControl
          value={Prenom}
          onChange={this.handleChange}
          type="text"
        />
      </FormGroup>
      <FormGroup controlId="Mail" bsSize="large">
        <ControlLabel>Mail</ControlLabel>
        <FormControl
          value={Mail}
          onChange={this.handleChange}
          type="text"
        />
      </FormGroup>
      <FormGroup controlId="Tel" bsSize="large">
        <ControlLabel>Tel</ControlLabel>
        <FormControl
          value={Tel}
          onChange={this.handleChange}
          type="text"
        />
      </FormGroup>
      <Button onClick={this.send} block bsSize="large" type="submit">
        Edit Manager
      </Button>
    </div>

    );
  }
}

export default ManagerEdit;
