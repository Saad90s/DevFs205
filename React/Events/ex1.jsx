
import React, { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  function incrementer() {
    setCompte(compte + 1);
  }

  return (
    <div>
      <p>Compte : {compte}</p>
      <button onClick={incrementer}>Incrémenter</button>
    </div>
  );
}

export default Compteur;
// Vous pouvez également passer des arguments à vos gestionnaires d'événements en utilisant des fonctions fléchées.