import React, { Component } from "react";

class Greetings extends Component {
  render() {
    let greetings ={
      de: "Hallo",
      en: "Hello",
      fr: "Boujour",
      ng: "Welcome"
    }
    return (
      <div className="box">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    )
  }
}

export default Greetings;