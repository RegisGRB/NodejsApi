import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import Golfservice from "../../services/Golf.service.jsx";
class Golfcreate extends React.Component {
    state = {
        Title: "golf",
        Latitude:"48.718358",
        Longitude:"2.067566",
        Description: "ceci est un golf",
        id_Manager: 1
      }
constructor(props){
    super();
    this.Golf = new Golfservice();

}
send = async () => {
    const { Title, Latitude,Longitude,Description, id_Manager } = this.state;
    try {
      const { data } = await this.Golf.create({ Title,Latitude,Longitude,Description,id_Manager });
     console.log(data)
      window.location = "/GolfAll";
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
    const { Title,Latitude,Longitude,Description,id_Manager } = this.state;
    return (

        <div className="Login">
        <FormGroup controlId="Title" bsSize="large">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={Title}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="Latitude" bsSize="large">
          <ControlLabel>Latitude</ControlLabel>
          <FormControl
            value={Latitude}
            onChange={this.handleChange}
            type="number"
          />
        </FormGroup>
        <FormGroup controlId="Longitude" bsSize="large">
          <ControlLabel>Longitude</ControlLabel>
          <FormControl
            value={Longitude}
            onChange={this.handleChange}
            type="number"
          />
        </FormGroup>
        <FormGroup controlId="Description" bsSize="large">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            value={Description}
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
          add golf
        </Button>
      </div>

    );
  }
}

export default Golfcreate;
