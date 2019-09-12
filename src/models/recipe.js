import {knex} from '../database.js';


export const Recipe = recipe => {
    this.title = recipe.title;
    this.description = recipe.description;
}

export const getAll = async () => await knex.from('recipes');
