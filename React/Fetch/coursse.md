`fetch` est une fonction intégrée dans les navigateurs modernes qui permet d'effectuer 
des requêtes HTTP pour récupérer des données à partir d'une API ou d'un serveur.

Explication simple :

1. **Qu'est-ce que `fetch` ?**
   `fetch` est une fonction JavaScript qui permet d'envoyer des requêtes HTTP (GET, POST, PUT, DELETE, etc.)
    à un serveur et de récupérer les données en réponse. C'est une alternative moderne à l'objet 
    `XMLHttpRequest` utilisé auparavant.

2. **Pourquoi utiliser `fetch` dans React ?**
   Dans les applications React, nous avons souvent besoin de récupérer des données à partir d'une API ou 
   d'un serveur. `fetch` nous permet de le faire de manière asynchrone, ce qui signifie que notre 
   application peut continuer à fonctionner pendant que les données sont en cours de chargement.

3. **Exemple simple :**
   Imaginons que nous voulons récupérer une liste de produits à partir d'une API. 
   Voici un exemple de code utilisant `fetch` :

   ```jsx
   import React, { useState, useEffect } from 'react';

   function ProductList() {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       fetch('https://api.example.com/products')
         .then(response => response.json())
         .then(data => setProducts(data))
         .catch(error => console.error('Erreur lors de la récupération des produits :', error));
     }, []);

     return (
       <ul>
         {products.map(product => (
           <li key={product.id}>{product.name}</li>
         ))}
       </ul>
     );
   }
   ```

   Explication :
   - Nous utilisons le hook `useState` pour stocker la liste des produits dans l'état du composant.
   - Nous utilisons le hook `useEffect` pour exécuter la requête `fetch` lorsque le composant est monté.
   - La fonction `fetch` prend l'URL de l'API en argument et renvoie une promesse.
   - Nous utilisons la méthode `.then` pour traiter la réponse de l'API. Nous convertissons d'abord la réponse
     en JSON avec `.json()`, puis nous mettons à jour l'état avec les données récupérées.
   - Nous utilisons la méthode `.catch` pour gérer les erreurs éventuelles.
   - Enfin, nous affichons la liste des produits dans un composant React.

Exercice :

Créez un composant React qui récupère une liste d'utilisateurs à partir de l'API suivante : 
`https://jsonplaceholder.typicode.com/users`.
 Affichez les noms et les adresses e-mail des utilisateurs dans une liste.


Dans cet exercice, nous avons créé un composant `UserList` qui utilise `fetch` pour récupérer 
une liste d'utilisateurs à partir de l'API `https://jsonplaceholder.typicode.com/users`. 
Nous affichons ensuite les noms
