// Convertissez le gestionnaire d'événement suivant en utilisant une arrow function :
<button onClick={function() { console.log('Bouton cliqué'); }}>
  Cliquez-moi !
</button>
// Correction de l'exercice 2 :
<button onClick={() => console.log('Bouton cliqué')}>
  Cliquez-moi !
</button>