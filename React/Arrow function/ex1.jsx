// Convertissez le composant suivant en utilisant une arrow function :
function Square(props) {
    return <div>{props.number * props.number}</div>;
}
//   Correction de l'exercice 1 :
const Square = (props) => {
    return <div>{props.number * props.number}</div>;
};
