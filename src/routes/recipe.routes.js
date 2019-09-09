import express from 'express';
import {getAll} from '../models/recipe.js';
const router = express.Router();
const Recipe = require('../models/recipe.js');

router.get('/',  (req, res) => {

    const recipes = getAll();

    res.json(recipes);
});

module.exports = router;
