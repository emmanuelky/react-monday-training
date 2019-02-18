import React, { Component } from "react";

class CreditCard extends Component {
  render() {
    

    return (
      <div className="creditcard">
      <h1>{this.props.type}</h1> 
      <h2>{this.props.number}</h2> 
      <h3>{this.props.expirationMonth} {this.props.expirationYear} {this.props.bank}</h3> 
      <h3>{this.props.owner}</h3> {this.props.bgColor} {this.props.color}
      </div>
    )
  }
}

export default CreditCard;