# componentDidMount()

C'est appelé juste après que le composant est monté (inséré dans le DOM).
Utilisé pour les initialisations qui nécessitent des nœuds DOM ou pour charger des données.

Exemple :
class MonComposant extends React.Component {
componentDidMount() {
console.log("Le composant est monté !");
// Charger des données depuis une API
fetch('https://api.exemple.com/donnees')
.then(response => response.json())
.then(data => this.setState({ donnees: data }));
}

render() {
return <div>Mon composant</div>;
}
}

# componentDidUpdate(prevProps, prevState)

Appelé après que le composant est mis à jour.
Utilisé pour effectuer des opérations DOM ou des requêtes réseau en fonction des changements.

Exemple :
class MonComposant extends React.Component {
componentDidUpdate(prevProps) {
if (this.props.userID !== prevProps.userID) {
console.log("L'ID de l'utilisateur a changé !");
this.fetchUserData(this.props.userID);
}
}

fetchUserData(id) {
// Charger les données de l'utilisateur
}

render() {
return <div>Données de l'utilisateur : {this.props.userID}</div>;
}
}

# componentWillUnmount()

Appelé juste avant que le composant soit détruit et retiré du DOM.
Utilisé pour le nettoyage (annuler des timers, des abonnements, etc.).

Exemple :
class MonComposant extends React.Component {
componentDidMount() {
this.timer = setInterval(() => {
console.log("Tick !");
}, 1000);
}

componentWillUnmount() {
console.log("Le composant va être détruit !");
clearInterval(this.timer); // Nettoyage : arrêter le timer
}
render() {
return <div>Mon composant avec un timer</div>;
}
}

Ces méthodes vous permettent de contrôler le comportement de votre composant à différentes étapes de son cycle de vie.
