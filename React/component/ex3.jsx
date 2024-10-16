import React from 'react';

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saisie: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      saisie: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Valeur saisie : ${this.state.saisie}`);
    this.setState({
      saisie: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Formulaire</h1>
        <input
          type="text"
          value={this.state.saisie}
          onChange={this.handleChange}
        />
        <button type="submit">Soumettre</button>
      </form>
    );
  }
}

export default Formulaire;
