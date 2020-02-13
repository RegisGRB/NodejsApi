import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import InfeenyPost from "./InfeenyPost";
import InfeenyInput from "./InfeenyInput";

class InfeenyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: this.RenderPosts(this.props.NbPost),
      Title: "Page Heading",
      Text: "Secondary Text"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="my-4">
              {this.state.Title}
              <br />
              <small> {this.state.Text}</small>
            </h1>

            <InfeenyInput actionTitle={this.handleTitle} actionText={this.handleText}></InfeenyInput>

            <ul style={{ backgroundColor: "unset" }}>
              {this.state.Posts.map(item => (
                <li key={item.index} style={{ float: "unset", marginbottom: "10px" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  handleTitle = text => {
    this.setState({
      Title: text
    });
  };

  handleText = text => {
    this.setState({
      Text: text
    });
  };

  RenderPosts(NbPost) {
    let array = [];
    for (let i = 0; i < NbPost; i++) {
      array.push(<InfeenyPost key={i} id={i} />);
    }
    return array;
  }
}

export default InfeenyContainer;
