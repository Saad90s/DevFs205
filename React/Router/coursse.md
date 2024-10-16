Le routage dans React permet de naviguer entre différentes pages ou composants de votre application sans avoir à recharger la page.
React Router est la bibliothèque la plus populaire pour gérer le routage dans une application React.

Exemple :
Supposons que vous ayez une application avec trois composants : Accueil, À propos et Contact. 
Vous pouvez utiliser React Router pour créer des routes pour chaque composant.

1. Installez React Router :
npm install react-router-dom


2. Importez les composants nécessaires de React Router dans votre fichier App.js :
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

3. Créez vos composants (Accueil, À propos, Contact) dans des fichiers séparés.

4. Dans votre fichier App.js, définissez les routes en utilisant les composants Route et Switch :

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

Exercice 1 :
Créez une application React avec deux composants : Produits et Détails du produit. 
Utilisez React Router pour créer des routes pour chaque composant.
