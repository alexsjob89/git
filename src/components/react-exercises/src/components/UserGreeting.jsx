import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <h1>welcome alex</h1>
    ) : (
      <h1>Welcome Guest</h1>
    );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>welcome alex</h1>;
    // } else message = <h1>Welcome Guest</h1>;

    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <h1>welcome alex</h1>;
    // } else {
    //   return <h1>Welcome Guest</h1>;
    // }
    // return (
    //   <>
    //     <h1>Welcome Guest</h1>
    //     <h1>welcome alex</h1>
    //   </>
    // );
  }
}

export default UserGreeting;
