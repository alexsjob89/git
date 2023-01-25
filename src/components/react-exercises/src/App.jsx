import React, { Component } from "react";
import "./App.css";
import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        <NameList />
      </div>
    );
  }
}

export default App;
