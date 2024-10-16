import React from 'react';

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0
    };
  }

  incrementerCompteur = () => {
    this.setState((prevState) => ({
      compteur: prevState.compteur + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Mon Composant</h1>
        <p>Compteur : {this.state.compteur}</p>
        <button onClick={this.incrementerCompteur}>Incrémenter</button>
      </div>
    );
  }
}

export default MonComposant;