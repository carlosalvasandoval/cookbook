import {conn as sql} from '../database.js';
//import { promisify } from 'util';
import thenify  from '../helpers/thenify.js';
//const sql = require('../database.js');

export const Recipe = recipe => {
    this.title = recipe.title;
    this.description = recipe.description;
}
const query =  thenify(sql.query);
export const getAll = async () => await query('SELECT * FROM recipes');
 /* Recipe.getAll = () => {
    return new Promise(
        (resolve, reject) => {
            sql.query('SELECT * FROM recipes', function (error, res) {
                if (error)
                    reject(error);
                resolve(res)
            });
        }
    );
} */

//export default {getAll,Recipe};
//module.exports = Recipe;



/* import Recipe from 'path'; // esto es solo para los export default

import {Recipe as abc,getAll} from 'path';// solo se puede acceder 1* 1 como linea 5
Recipe.getAll

import * as Recipe from 'path'// esto es para todos
Recipe.getAll; */
