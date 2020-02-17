import React from "react";

import InfeenyContainer from "./subComponents/InfeenyContainer";

class Infeeny extends React.Component {
  render() {
    return (
      <div className="infeeny">
        <h1>Hi infeeny</h1>
        <div>
          <InfeenyContainer NbPost="3"></InfeenyContainer>
        </div>
      </div>

      //React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi infeeny "))
    );
  }
}

export default Infeeny;
