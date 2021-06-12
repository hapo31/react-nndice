import React from "react";
import { CSSProperties } from "react";

type Props = {
  roll: boolean;
  onStop: (face: string) => void;
};

type State = {
  face: string;
};

const faces = "おうまちんこ".split("");

class Dice extends React.Component<Props, State> {

  state = {
    face: this.getDiceFace()
  };

  private diceRollTimer = 0;

  componentDidUpdate(prevProps: Props) {
    if (this.props.roll && !prevProps.roll) {
      this.startDiceRoll();
      setTimeout(() => {
        this.stopDiceRoll();
        this.props.onStop(this.state.face);
      }, 3000);
    }
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
