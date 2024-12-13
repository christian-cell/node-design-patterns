import { findHeroeById } from "./services/hero.service";

const hero = findHeroeById(3);

console.log(hero?.name ?? 'Hero not found'); // si le pasamos un id 4 esto lanzará undefined , lanzamos un mensaje de no encontrado