
import React, { useState } from 'react';

function FormulaireSoumission() {
  const [texte, setTexte] = useState('');

  function gererChangement(e) {
    setTexte(e.target.value);
  }

  function gererSoumission(e) {
    e.preventDefault();
    alert(`Texte saisi : ${texte}`);
  }

  return (
    <form onSubmit={gererSoumission}>
      <input type="text" value={texte} onChange={gererChangement} />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireSoumission;
// Ces exemples et exercices devraient vous aider à comprendre les bases des événements dans React.
// N'hésitez pas à pratiquer davantage pour vous familiariser avec les différents types d'événements et leur utilisation dans vos composants React.
