import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ManagerService from "../../services/Manager.service.jsx";
class ManagerAll extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
    this.Manager = new ManagerService();
    const allmanagers = this.Manager.getmanagers();
    allmanagers.then(datax => {
      this.setState({
        data: datax
      });
    });
    console.log(allmanagers);
  }

  render() {
    const items = this.state.data.map((datar, key) => (
      <tr key={key} style={{ width: "100%" }}>
        <h4>{datar.Nom} {datar.Prenom}</h4>
        <td>
          {datar.Mail}
        </td>
        <td>
          {datar.Tel}
        </td>
        <td><Link to={"/Manager/Edit/" + datar._id}>
          <Button className="btn btn-primary">Edit</Button>
        </Link></td>
        <td><Button
          className="btn  btn-danger"
          onClick={() => this.deletemanager(datar)}
        >
          DELETE
        </Button></td>
      </tr>
    ));

    console.log(items);
    return (
      <div className="ManagerAll">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Mail</th>
              <th scope="col">Tel</th>
              <th scope="col">Edit</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }

  async deletemanager(element) {
    const { data } = await this.Manager.removeManager(element._id);
    console.log(data);
    var array = [...this.state.data];
    var index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ data: array });
    }
  }
}

export default ManagerAll;
