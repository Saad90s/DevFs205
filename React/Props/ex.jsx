function Carte(props) {
    return (
        <div>
            <img src={props.image} alt={props.titre} />
            <h2>{props.titre}</h2>
            <p>{props.description}</p>
        </div>
    );
}

//   <Carte
//     titre="Vacances à la plage"
//     description="Profitez de magnifiques vacances au bord de la mer."
//     image="https://exemple.com/plage.jpg"
//   />