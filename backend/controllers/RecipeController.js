var request = require("request");
const apiKey = process.env.API_KEY;
const axios = require('axios');

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
    // console.log(req.query);
    res.send(req.query.diet);
    
    axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
            apiKey: apiKey,
            diet: req.query.diet,
            cuisine: req.query.cuisine,
            intolerance: req.query.intolerance,
            minCal: req.query.minCal,
            maxCal: req.query.maxCal
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    })

    // request(
    //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=2&addRecipeNutrition=true`,
    //     function(error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             var parseBody = JSON.parse(body);
    //             var data = parseBody;
    //             res.send(data);
    //         }
    //     }
    // );
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