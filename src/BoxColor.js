import React, { Component } from "react";

class BoxColor extends Component {
  render() {

    let rgb = []
  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }
    return (
      <div className="box-color" style={{backgroundColor: `rgb(${rgb})`,color: "white"}}>
       rgb({this.props.r},{this.props.g},{this.props.b})
      </div>
    )
  }
}

export default BoxColor;