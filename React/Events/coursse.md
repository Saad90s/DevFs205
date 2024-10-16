Les événements dans React permettent de gérer les interactions de l'utilisateur avec les composants de votre application
Ils fonctionnent de manière similaire aux événements du DOM, mais avec une syntaxe légèrement différente.

Pour ajouter un gestionnaire d'événements à un élément JSX, vous utilisez la syntaxe camelCase. 
Par exemple, pour gérer un clic sur un bouton, vous utiliserez l'attribut `onClick` au lieu de `onclick`.

Exemple :
```jsx
function Button() {
  function handleClick() {
    console.log("Le bouton a été cliqué !");
  }

  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```

Dans cet exemple, lorsque le bouton est cliqué, la fonction `handleClick` 
est appelée et affiche un message dans la console.

Exercice 1 :
Créez un composant `Compteur` qui affiche un bouton et un compteur. 
Chaque fois que le bouton est cliqué, incrémentez le compteur de 1.



Exemple :
```jsx
function Salutation({ nom }) {
  function saluer(message) {
    console.log(`${message}, ${nom} !`);
  }

  return <button onClick={() => saluer("Bonjour")}>Saluer</button>;
}
```

Exercice 2 :
Créez un composant `FormulaireSoumission` qui affiche un champ de texte et un bouton de soumission. 
Lorsque le formulaire est soumis, affichez le texte saisi dans une alerte.
