const sql = require('../database.js');

const Recipe = recipe => {
    this.title = recipe.title;
    this.description = recipe.description;
}

Recipe.getAll = () => {
    return new Promise(
        (resolve, reject) => {
            sql.query('SELECT * FROM recipes', function (error, res) {
                if (error)
                    reject(error);

                resolve(res)
            });
        }
    );
}


module.exports = Recipe;