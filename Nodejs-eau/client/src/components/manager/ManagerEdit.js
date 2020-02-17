import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Managerservice from "../../services/Manager.service.jsx";
class ManagerEdit extends React.Component {
  constructor(props) {
    super();
    this.  state = {
      Nom: "Regis",
      Prenom: "Bogota",
      Mail:"Regis.bogota@ynov.com",
      Tel: "0642079293",
      id_Manager: 1
    };
    this.Manager = new Managerservice();
    const manager = this.Manager.getManagerDetail(props.match.params.id);
    manager.then(datax => {
      this.setState({
        Nom: datax.Nom,
        Prenom:datax.Prenom,
        Mail:datax.Mail,
        Tel: datax.Tel,
        id_Manager:datax.id_Manager
      });
    });
  }

  send = async () => {
    const { Nom, Prenom,Mail,Tel, id_Manager } = this.state;
    try {
      const data = await this.Manager.EditManager(this.props.match.params.id,{ Nom, Prenom,Mail,Tel, id_Manager });
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
    const { Nom, Prenom,Mail,Tel, id_Manager } = this.state;
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
          type="number"
        />
      </FormGroup>
      <FormGroup controlId="Mail" bsSize="large">
        <ControlLabel>Mail</ControlLabel>
        <FormControl
          value={Mail}
          onChange={this.handleChange}
          type="number"
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
      <FormGroup controlId="id_Manager" bsSize="large">
        <ControlLabel>Manager</ControlLabel>
        <FormControl
          value={id_Manager}
          onChange={this.handleChange}
          type="number"
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
