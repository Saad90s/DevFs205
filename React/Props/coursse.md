Les props (propriétés) dans React permettent de passer des données d'un composant parent à un composant enfant.
C'est un moyen de rendre les composants réutilisables et modulaires.

Exemple :
Imaginons un composant "Bonjour" qui affiche un message de salutation.
On peut passer le nom de la personne à saluer via une prop "nom".

jsx
function Bonjour(props) {
  return <h1>Bonjour, {props.nom} !</h1>;
}


Pour utiliser ce composant et passer la prop "nom", on écrit :

<Bonjour nom="Alice" />

Le composant "Bonjour" affichera alors "Bonjour, Alice !".

Exercice 1 :
Créez un composant "Badge" qui affiche un badge avec un texte et une couleur de fond.
Le texte et la couleur doivent être passés via des props.

Exercice 2 :
Créez un composant "Carte" qui affiche une carte avec un titre, une description et une image. 
Ces éléments doivent être passés via des props.


En résumé, les props permettent de rendre les composants React plus flexibles et réutilisables en leur 
permettant de recevoir des données de leur composant parent. Cela facilite la création d'interfaces 
utilisateur modulaires et maintenables.