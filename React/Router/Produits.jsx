
import { Link } from 'react-router-dom';

function Produits() {
  return (
    <div>
      <h1>Produits</h1>
      <ul>
        <li>
          <Link to="/produit/1">Produit 1</Link>
        </li>
        <li>
          <Link to="/produit/2">Produit 2</Link>
        </li>
      </ul>
    </div>
  );
}
export default Produits;