1 Dar un ojo al docker-compose.yml

vemos que estamos trabajando con las imagenes de docker de mongo y de postgress,

como interfaces gráficas de estas usamos:

MongoDB Compass
Table Plus para postgres

para connectar verificar los valores del .env

para connectar desde node para mongo usamos mongoose

```
$ npm i mongoose
```

si hay algún error al importar mongoose en el archivo
ver si VS code lo subraya en rojo , de ser así poner el cursor encima
y va a recomendar instalar los @types ( este paso vale para cualquier librería de npm )


ORM's

para conectar con postgres desde Node vamos a usar Prisma o TypeORM

TypeORM es mas robusto y prisma tiene menos flexibilidad pero mas sencillo para arrancar 

```
$ npm install prisma --save-dev
```

para conectar 

```
$ npx prisma init --datasource-provider PostgreSQL
```

al realizar estos comandos se crea un directorio prisma en la raiz del proyecto

```
prisma
    |
    |---> schema.prisma
```

en este archivo reemplazamos la url por la variable que creamos en el .env en mi caso POSTGERS_URL

```
datasource db {
  provider = "postgresql"
  url      = env("POSTGERS_URL")
}
```

y empezamos a crear el modelo con la ( peculiar sintaxis de prisma ) a continuación un ejemplo

```
enum SeverityLevel {

  LOW
  MEDIUM
  HIGH
}

model LogModel {

  id          Int                  @id     @default(autoincrement())
  message     String
  origin      String
  level       SeverityLevel
  createdAt   DateTime                     @default(now())
}
```

ojo para conectar a y correr migraciones con prisma en el .env

````
POSTGRES_URL=postgresql://<username>:<password>@127.0.0.1:5432/NOC
```

aplicamos la migración
```
npx prisma migrate dev --name init
```

A leer y corregir errores 🤣🤣🤣