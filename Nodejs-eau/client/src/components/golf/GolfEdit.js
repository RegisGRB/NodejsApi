import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Golfservice from "../../services/Golf.service.jsx";
import ManagerService from "../../services/Manager.service.jsx";
class GolfEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Title: "golf",
      Latitude:"48.718358",
      Longitude:"2.067566",
      Description: "ceci est un golf",
      id_Manager: 1,
      manage:[]
    };
    this.Golf = new Golfservice();
    const golf = this.Golf.getgolfsDetail(props.match.params.id);
    golf.then(datax => {
      this.setState({
        Title: datax.Title,
        Latitude:datax.Latitude,
        Longitude:datax.Longitude,
        Description: datax.Description,
        id_Manager:datax.id_Manager
      });
    });

    this.Manager = new ManagerService();
    const allmanagers = this.Manager.getmanagers();
    allmanagers.then(datax => {
      this.setState({
        manage: datax
      });
    });
  }

  send = async () => {
    const { Title, Latitude,Longitude,Description, id_Manager } = this.state;
    try {
      const data = await this.Golf.Editgolf(this.props.match.params.id,{ Title,Latitude,Longitude,Description,id_Manager });
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
            componentClass="select"
            placeholder="select"
            value={this.state.id_Manager}
            inputRef={el => (this.inputEl = el )}
            onChange={this.handleChange}

          >
           <option></option>
        {
            this.state.manage.map(function (data) {
              return <option key={data._id} value={data._id} type="text">{data.Nom} {data.Prenom}</option>
            })
        }
          </FormControl>
        </FormGroup>
        <Button onClick={this.send} block bsSize="large" type="submit">
          Edit golf
        </Button>
      </div>

    );
  }
}

export default GolfEdit;
