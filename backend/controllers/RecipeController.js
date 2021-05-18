var request = require("request");
const apiKey = process.env.API_KEY;

require('dotenv').config();

exports.index = (req, res) => {
    const searchData = {
        "cuisines": [
            "American",
            "British",
            "Cajun",
            "Caribbean",
            "Chinese",
            "Eastern European",
            "European",
            "French",
            "German",
            "Greek",
            "Indian",
            "Irish",
            "Italian",
            "Japanese",
            "Jewish",
            "Korean",
            "Latin American",
            "Mediterranean",
            "Mexican",
            "Middle Eastern",
            "Nordic",
            "Southern",
            "Spanish",
            "Thai",
            "Vietnamese"
        ],
        "diets": [
            "Gluten Free",
            "Ketogenic",
            "Vegetarian",
            "Lacto-Vegetarian",
            "Ovo-Vegetarian",
            "Vegan",
            "Pescetarian",
            "Paleo",
            "Primal",
            "Whole30",
        ]
    };

    var data = searchData;
    res.send({data});
}

exports.searchRecipes = (req, res) => {
    // const diet = req.params;
    // const cuisine = req.params;
    // const intolerence = req.params;
    // const minKcal = req.params;
    // const maxKcal = req.params;
    // const minProtein = req.params;
    // const maxProtein = req.params;
    // const minCarbs = req.params;
    // const maxCarbs = req.params;

    request(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=2&addRecipeNutrition=true`,
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var parseBody = JSON.parse(body);
                var data = parseBody;
                res.send(data);
            }
        }
    );
}

exports.getRecipe = (req, res) => {
    const id = req.params.id;
    
    request(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        }
    )
}