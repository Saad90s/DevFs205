import { useParams } from 'react-router-dom';

function DetailsProduit() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du produit {id}</h1>
      {/* Affichez les détails du produit */}
    </div>
  );
}
