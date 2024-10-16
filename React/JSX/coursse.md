JSX (JavaScript XML) est une extension syntaxique de JavaScript utilisée dans React pour décrire l'apparence
de l'interface utilisateur. Il permet de combiner le code HTML et JavaScript dans un même fichier, 
rendant le code plus lisible et maintenable.

**Exemple 1 :**
JSX :
jsx
const element = <h1>Bonjour, monde !</h1>;
```

Équivalent JavaScript :
```javascript
const element = React.createElement('h1', null, 'Bonjour, monde !');
```

Dans cet exemple, le code JSX est plus concis et ressemble à du HTML, 
tandis que l'équivalent JavaScript utilise la méthode `React.createElement()` pour créer l'élément.

**Exemple 2 :**
JSX avec expression JavaScript :
```jsx
const name = 'John';
const element = <h1>Bonjour, {name} !</h1>;
```

Dans cet exemple, nous utilisons des accolades `{}` pour inclure une expression JavaScript à l'intérieur du JSX. Ici, la variable `name` est intégrée dans le contenu de l'élément `<h1>`.

En résumé, JSX est une syntaxe pratique et expressive pour créer des éléments React. Il permet de combiner le code HTML et JavaScript de manière lisible et concise. Les expressions JavaScript peuvent être intégrées dans le JSX en utilisant des accolades `{}`. JSX facilite la création d'interfaces utilisateur dans React et améliore la lisibilité du code.
