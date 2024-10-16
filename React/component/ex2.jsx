import React from 'react';

class ListeDeTaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taches: [],
      nouvelleTache: ''
    };
  }

  ajouterTache = () => {
    if (this.state.nouvelleTache.trim() !== '') {
      this.setState((prevState) => ({
        taches: [...prevState.taches, this.state.nouvelleTache],
        nouvelleTache: ''
      }));
    }
  }

  supprimerTache = (index) => {
    this.setState((prevState) => ({
      taches: prevState.taches.filter((_, i) => i !== index)
    }));
  }

  handleChange = (event) => {
    this.setState({
      nouvelleTache: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Liste de tâches</h1>
        <input
          type="text"
          value={this.state.nouvelleTache}
          onChange={this.handleChange}
        />
        <button onClick={this.ajouterTache}>Ajouter</button>
        <ul>
          {this.state.taches.map((tache, index) => (
            <li key={index}>
              {tache}
              <button onClick={() => this.supprimerTache(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListeDeTaches;