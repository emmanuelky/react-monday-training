import React, { Component } from "react";

class BoxColor extends Component {
  render() {

    let { r,g,b } = this.props
    let hex = '#'
      + ('0'+r.toString(16)).substr(-2)
      + ('0'+g.toString(16)).substr(-2)
      + ('0'+b.toString(16)).substr(-2)
    let color = 'white'
    if (r+g+b > 127*3) color = 'black'
    return (
      <div className="BoxColor box" style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        color: color,
      }}>
        rgb({r},{g},{b})<br/>
        {hex}
      </div>


      // RANDOM RGB DISPLAY

  //   let rgb = []
  // for (let i = 0; i < 3; i++) {
  //   let r = Math.floor(Math.random() * 256)
  //   rgb.push(r)
  // }
  //   return (
  //     <div className="box-color" style={{backgroundColor: `rgb(${rgb})`,color: "white"}}>
  //      rgb({this.props.r},{this.props.g},{this.props.b})
  //     </div>
    )
  }
}

export default BoxColor;