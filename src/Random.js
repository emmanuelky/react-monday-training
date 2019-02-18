import React, { Component } from "react";

class Random extends Component {
  render() {
   let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max + Math.floor(Math.random())))
    return (
      <div>
      Random value between 1 {this.props.mins} and {this.props.max} => {randomValue}
      </div>
    )
  }
}

export default Random;