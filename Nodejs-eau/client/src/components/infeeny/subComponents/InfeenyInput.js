import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class InfeenyInput extends React.Component {
  constructor(props) {// fonction qui initialise notre composant
    super(props);
    this.state = {
      Title: "",
      Text: ""
    };
  }
// exemple de fonction integrer par react 
  componentDidMount() {// quand le composant a fini de render
    console.log("Fin du render du component infeenyInput");
  }
  componentDidUpdate() {// a n'importe quel action du composant
    console.log("action du component infeenyInput");
  }
  componentWillUnmount() {//lorsque que le composant va etre dechargé par react
    alert("Le composant va etre dechargé par react");
  }
  render() {
    return (
      <div>
        <input autoFocus type="text" name="Title" value={this.state.Title} onChange={this.handleChange}></input>
        <input autoFocus type="text" name="Text" value={this.state.Text} onChange={this.handleChange}></input>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.actionTitle(this.state.Title);
    this.props.actionText(this.state.Text);
  }
}

export default InfeenyInput;
