import express from 'express';
import {getAll} from '../models/recipe.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const recipes = await getAll();
    res.json(recipes);
});

module.exports = router;
