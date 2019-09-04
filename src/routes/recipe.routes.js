import express from 'express';

const router = express.Router();
const Recipe = require('../models/recipe.js');

router.get('/', async (req, res) => {

    const recipes = await Recipe.getAll();

    res.json(recipes);
});

module.exports = router;
