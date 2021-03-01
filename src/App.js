import "./App.css";
import React, { Component } from "react";
import Task from "./Components/Task.js";

class App extends Component {
  constructor() {
    super();

    this.objTask = [
      "Doctor's Appointment  -  5:00 pm",
      "Meeting at School  -  3:00 am",
      "Clothes Shopping  -  4:00 pm",
      "Kill Rafi  -  5:45 pm",
    ];

    this.functioner = (id) => {
      switch (id) {
        case 0:
          this.state.Task1 = null;
          break;

        case 1:
          this.state.Task2 = null;
          break;

        case 2:
          this.state.Task3 = null;
          break;

        case 3:
          this.state.Task4 = null;
          break;

        default:
          break;
      }
    };

    this.addTask = () => {
      this.setState(this.state, this.adder());
    };

    this.adder = () => {
      if (this.state.Task1 === null) {
        this.state.Task1 = (
          <Task message={this.objTask[0]} OnDelete={this.DeleteTask} id={0} />
        );
      } else if (this.state.Task2 === null) {
        this.state.Task2 = (
          <Task message={this.objTask[1]} OnDelete={this.DeleteTask} id={1} />
        );
      } else if (this.state.Task3 === null) {
        this.state.Task3 = (
          <Task message={this.objTask[2]} OnDelete={this.DeleteTask} id={2} />
        );
      } else if (this.state.Task4 === null) {
        this.state.Task4 = (
          <Task message={this.objTask[3]} OnDelete={this.DeleteTask} id={3} />
        );
      }
    };

    this.plusStyle = {
      backgroundColor: "rgb(65, 250, 145)",
      position: "absolute",
      right: "395px",
      top: "90px",
      fontSize: "32px",
      cursor: "pointer",
      color: "white",
      border: "2px Solid rgb(65, 250, 145)",
      borderRadius: "5px",
      padding: "0px 5px",
      textShadow: "0px 1px 0px black",
      boxShadow: "1px 2px 3px green",
    };

    this.DeleteTask = (id) => {
      this.setState(this.state, this.functioner(id));
    };

    this.state = {
      Task1: (
        <Task message={this.objTask[0]} OnDelete={this.DeleteTask} id={0} />
      ),
      Task2: (
        <Task message={this.objTask[1]} OnDelete={this.DeleteTask} id={1} />
      ),
      Task3: (
        <Task message={this.objTask[2]} OnDelete={this.DeleteTask} id={2} />
      ),
      Task4: (
        <Task message={this.objTask[3]} OnDelete={this.DeleteTask} id={3} />
      ),
    };
  }

  render() {
    return (
      <div className="UnHappy">
        <h1>
          Task Manager{" "}
          <p onClick={this.addTask} style={this.plusStyle}>
            Add
          </p>
        </h1>
        {this.state.Task1}
        {this.state.Task2}
        {this.state.Task3}
        {this.state.Task4}
      </div>
    );
  }
}

export default App;
