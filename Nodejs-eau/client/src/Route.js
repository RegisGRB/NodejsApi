import React from "react";

import { Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Golfcreate from "./components/golf/Golfcreate";
import GolfAll from "./components/golf/GolfAll";
import GolfEdit from "./components/golf/GolfEdit";
import UserAll from "./components/user/UserAll"
import UserEdit from "./components/user/UserEdit";
class Routes extends React.Component {
constructor(props){
super(props);
}

  render() {
    return (
      <div>
    {RenderRoutes(this.props.isLoggedIn,this.props.isAdmin)}
      </div>
    );
  }

}
function RenderRoutes(log,admin) {
const isLoggedIn=log;
const isadmin=admin;
console.log(isLoggedIn);
  if (isLoggedIn===null) {
    return (
      <div>
      <Route exact path="/" component={Login} />
      <Route path="/Signup" component={Signup } />
     </div>
    );
  }

  if(isLoggedIn && isadmin==="false"){
    return (
      <div>
       <Route path="/Dashboard" component={Dashboard } />
     </div>
    );
  }
  
  
  if(isLoggedIn && isadmin==="true"){
    return( 
    <div>
    <Route path="/Dashboard" component={Dashboard } />
    <Route path="/Golfcreate" component={Golfcreate } />
    <Route path="/GolfAll" component={GolfAll } />
    <Route path="/Golf/Edit/:id" component={GolfEdit } />

    <Route path="/User/Edit/:id" component={UserEdit } />
    <Route path="/UserAll" component={UserAll } />
   </div>
   );
  }
 
}
export default Routes;
