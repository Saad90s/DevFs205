
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Produits from './Produits';
import DetailsProduit from './DetailsProduit';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Produits</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Produits} />
          <Route path="/produit/:id" component={DetailsProduit} />
        </Switch>
      </div>
    </Router>
  );
}