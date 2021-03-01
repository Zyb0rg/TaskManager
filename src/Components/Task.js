import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";

class Task extends Component {
  constructor(props) {
    super(props);
    this.msg = props.message;
    this.id = props.id;
    this.ResetTask = props.ResetTask;

    this.myStyle = {
      backgroundColor: "rgb(235, 234, 232)",
      textAlign: "left",
      marginLeft: "50px",
      marginTop: "-10px",
      padding: "20px",
      color: "black",
      borderRadius: "2px",
      border: "2px Solid rgb(235, 234, 232)",
      width: "560px",
      fontWeight: "bold",
      fontSize: "18px",
      height: "40px",
      verticalAlign: "middle",
      display: "flex",
    };

    this.iconStyle = {
      color: "rgb(255, 109, 109)",
      backgroundColor: "rgb(235, 234, 232)",
      position: "absolute",
      right: "400px",
      fontSize: "28px",
      cursor: "pointer",
    };
  }

  state = {};
  render() {
    return (
      <div className="Tasks">
        <p style={this.myStyle}>
          {this.msg}{" "}
          <FaTimes
            style={this.iconStyle}
            onClick={() => this.props.OnDelete(this.props.id)}
          />
        </p>
      </div>
    );
  }
}

export default Task;
