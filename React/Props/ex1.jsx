function Badge(props) {
    return (
        <div style={{ backgroundColor: props.couleur, padding: '10px' }}>
            {props.texte}
        </div>
    );
}


{/* <Badge texte="Nouveau" couleur="red" /> */ }
{/* <Badge texte="En cours" couleur="yellow" /> */ }