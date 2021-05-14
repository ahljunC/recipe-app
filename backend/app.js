const express = require('express');
// var request = require("request");
const app = express();
// var key = 'a4354b73ac5e4773935dd144949070cc';

require('dotenv').config();

app.use('/', require('./routes/routes'));


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/newEndPoint', (req, res) => {
//     res.send('new endpoint')
// })

// app.get('/getRecipe', (req, res) => {
//     request(
//         "https://api.spoonacular.com/recipes/716429/information?apiKey=a4354b73ac5e4773935dd144949070cc&number=1",
//         function(error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 var parseBody = JSON.parse(body);
//                 var recipe_title = parseBody['title'];
//                 res.send({recipe_title});
//             }
//         }
//     );
// });

const port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})