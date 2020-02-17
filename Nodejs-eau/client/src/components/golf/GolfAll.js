import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Golfservice from "../../services/Golf.service.jsx";
class GolfAll extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
    this.Golf = new Golfservice();
    const allgolf = this.Golf.getgolfs();
    allgolf.then(datax => {
      this.setState({
        data: datax
      });
    });
    console.log(allgolf);
  }

  render() {
    const items = this.state.data.map((datar, key) => (
      <tr key={key} style={{ width: "100%" }}>
        <h4>{datar.Title}</h4>
        <td>
          {datar.Latitude} {datar.Longitude}
        </td>
        <td>
          {datar.Description}
        </td>
        <td>
          {datar.id_Manager}
        </td>
        <td><Link to={"/Golf/Edit/" + datar._id}>
          <Button className="btn btn-primary">Edit</Button>
        </Link></td>
        <td><Button
          className="btn  btn-danger"
          onClick={() => this.deletegolf(datar)}
        >
          DELETE
        </Button></td>
      </tr>
    ));

    console.log(items);
    return (
      <div className="GolfAll">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Manager</th>
              <th scope="col">Edit</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }

  async deletegolf(element) {
    const { data } = await this.Golf.removeGolf(element._id);
    console.log(data);
    var array = [...this.state.data];
    var index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ data: array });
    }
  }
}

export default GolfAll;
