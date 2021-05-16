const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/RecipeController');

router.get('/index', recipeController.index);
router.get('/recipe/search', recipeController.searchRecipes);
router.get('/recipe/:id', recipeController.getRecipe);
module.exports = router
