import "../../styles/Inschrijven.css";
import React, { Component } from "react";
import Information from "./Information";
import Confirmation from "./Confirmation";
import Success from "./Success";

class EnrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      voornaam: null,
      achternaam: null,
      adres: null,
      tak: null,
      email: null
    };
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return <Information />;
      case 2:
        return <Confirmation />;
      case 3:
        return <Success />;
      default:
        return <div>Error, herlaad de huidige pagina alstublieft</div>;
    }
  }

  render() {
    return (
      <div>
        <div className="enrollFormTitle">Schrijf uw kind in: </div>
        {this.showStep()}
      </div>
    );
  }
}

export default EnrollForm;
