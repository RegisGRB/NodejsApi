import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Userservice from "../../services/User.service.jsx";
class UserAll extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
    this.User = new Userservice();
    const alluser = this.User.getusers();
    alluser.then(datax => {
      this.setState({
        data: datax
      });
    });
    console.log(alluser);
  }

  render() {
    const items = this.state.data.map((datar, key) => (
      <tr key={key} style={{ width: "100%" }}>
        <h4>{datar.email}</h4>
        <td>
          {datar.firstname} {datar.lastname}
        </td>
        <td>
          {datar.admin.toString()}
        </td>
        <td><Link to={"/User/Edit/" + datar._id}>
          <Button className="btn btn-primary">Edit</Button>
        </Link></td>
        <td><Button
          className="btn  btn-danger"
          onClick={() => this.deleteuser(datar)}
        >
          DELETE
        </Button></td>
      </tr>
    ));

    console.log(items);
    return (
      <div className="GolfAll">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">email</th>
              <th scope="col">firstname lastname</th>
              <th scope="col">admin</th>
              <th scope="col">Edit</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }

  async deleteuser(element) {
    const { data } = await this.User.removeuser(element._id);
    console.log(data);
    var array = [...this.state.data];
    var index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ data: array });
    }
  }
}

export default UserAll;
