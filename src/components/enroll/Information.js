import React, { Component } from "react";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  saveAndContinue(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          Voornaam: <input type="text" onChange={this.handleChange} />
        </label>

        <label>
          Achternaam: <input type="text" onChange={this.handleChange} />
        </label>

        <label>
          Email: <input type="email" onChange={this.handleChange} />
        </label>

        <label>
          Adres: <input type="text" onChange={this.handleChange} />
        </label>

        <label>
          Tak: <input type="text" onChange={this.handleChange} />
        </label>

        <button onClick={this.saveAndContinue}>Save and Continue</button>
      </div>
    );
  }
}

export default Information;
