import React, { Component } from "react";
import "./App.css";
import Greetings from "./Greetings.js"
import BoxColor from "./BoxColor.js"
import Random from "./Random.js"
import CreditCard from "./CreditCard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">France</Greetings>

        {/* //Option 2 */}
        
        <Greetings lang="ng" children="Lagos" />
        <Greetings lang="en" children="London" />

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        
        
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={255} g={133} b={13} />

        <h1>Credit Card</h1>
        <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#eecc55" color="white" />
        
      </div>
    );
  }
}



export default App;
