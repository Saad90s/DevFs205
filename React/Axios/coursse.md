Axios est une bibliothèque populaire pour faire des requêtes HTTP depuis une application JavaScript,
y compris les applications React.

**Explication simple :**

Imaginez que vous voulez récupérer des données d'un serveur distant pour les afficher dans votre application React. 
Vous pouvez utiliser Axios pour envoyer une requête HTTP à ce serveur et récupérer les données. 
Voici un exemple simple :

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      <h1>Données récupérées :</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Dans cet exemple, nous importons Axios et utilisons la méthode `get` pour envoyer une requête GET à l'URL 
`https://api.example.com/data`. Lorsque la réponse est reçue, nous mettons à jour le state `data` 
avec les données récupérées. Ensuite, nous affichons ces données dans une liste non ordonnée.

**Exercice :**

Créez un composant React qui récupère une liste de films depuis l'API suivante : 
`https://api.example.com/movies`.
Affichez le titre de chaque film dans une liste non ordonnée.


Dans cet exemple, nous créons un composant `MovieList` qui récupère une liste de films depuis l'API 
`https://api.example.com/movies` en utilisant Axios. 
Nous stockons les films dans le state `movies` et les affichons dans une liste non ordonnée.
