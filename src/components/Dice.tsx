import React from "react";
import { CSSProperties } from "react";

type Props = {
};

type State = {
  face: string;
  roll: boolean;
};

const faces = "おうまちんこ".split("");

class Dice extends React.Component<Props, State> {

  state = {
    face: "う",
    roll: true
  };

  private diceRollTimer = 0;

  componentDidMount() {
    this.startDiceRoll();
    setTimeout(() => {
      this.setState({
        roll: false,
      });
      this.stopDiceRoll();
    }, 3000);
  }

  render() {
    return <div style={containerStyle}>
      <div style={foundationStyle}>
        {this.state.face}
      </div>
    </div>
  }

  private getDiceFace() {
    const index = Math.floor(Math.random() * faces.length);
    return faces[index];
  }

  private startDiceRoll ()  {
    this.diceRollTimer = window.setInterval(() => {
      this.setState({
        face: this.getDiceFace()
      });
    }, 100);
  }

  private stopDiceRoll() {
    clearInterval(this.diceRollTimer);
    this.diceRollTimer = 0;
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
