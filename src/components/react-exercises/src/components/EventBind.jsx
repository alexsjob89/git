import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Goodby",
  //   });
  //   console.log(this);
  // }
  clickHandler = () => {
    this.setState({ message: "goodby" });
  };

  render() {
    return (
      <div>
        <div style={{ fontSize: "40px", color: "red" }}>
          {this.state.message}
        </div>
        <button
          onClick={() => this.clickHandler()}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "20px",
            fontSize: "30px",
            padding: "7px",
          }}>
          click
        </button>
      </div>
    );
  }
}
export default EventBind;
