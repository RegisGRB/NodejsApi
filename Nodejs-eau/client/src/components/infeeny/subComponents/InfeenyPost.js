import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
    Link
  } from "react-router-dom";
class InfeenyPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        id:this.props.id
        }
     
      }
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta
            expedita corporis animi vero voluptate voluptatibus possimus, veniam
            magni quis!
          </p>
          <Link to={"/card"+this.state.id} className="btn btn-primary">
            Read More &rarr;
          </Link>
        </div>
        <div className="card-footer text-muted">
          Posted on January 1, 2017 by
 
        </div>
      </div>
    );
  }
}

export default InfeenyPost;
