import React from "react";
import { CSSProperties } from "react";

class Dice extends React.Component {
  render() {
    return <div style={containerStyle}>
      <div style={foundationStyle}>
        う
      </div>
    </div>
  }
}

export default Dice;

const containerStyle: CSSProperties = {
  padding: "10px",
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const foundationStyle: CSSProperties = {
  border: "1px solid black",
  fontSize: "30px",
  lineHeight: "30px",
  width: "100%",
  height: "100%",
};
