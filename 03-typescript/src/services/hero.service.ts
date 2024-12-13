import { Hero, heroes } from "../data/heros";

export const findHeroeById = (id: number) => {

    return heroes.find(( hero : Hero ) => hero.id === id);
}