vamos a conocer sobre npm i json-server JSON SERVER , una herramienta fácil y rápida para 
montar una REST API "solo para demos" no prod

$ npm i json-server

creamos un db.json en la raiz de esta manera 

```
{
    "posts": [

      { "id": "1", "title": "a title", "views": 100 },
      { "id": "2", "title": "another title", "views": 200 }
    ],

    "comments": [

      { "id": "1", "text": "a comment about post 1", "postId": "1" },
      { "id": "2", "text": "another comment about post 1", "postId": "1" }
    ],

    "profile": {
        
      "name": "typicode"
    }
  }
```

en el package.json añadimos este script
```
"start": "npx json-server db.json"
```

y corremos el

$ npm start

veremos que nos ha formado 3 endpoints

```
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
```

para que un front pueda consumir nuestra API rápido

en http://localhost:3000

tendremos la docu de la API