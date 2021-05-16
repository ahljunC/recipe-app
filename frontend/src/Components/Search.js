import React, { useEffect, useState } from 'react'
import axios from "axios";

// export default class Search extends Component {
//     constructor() {
//         super();
//         this.state = {
//             recipe: "Not found"
//         };
//     }

//     handleButtonClick = () => {
//         axios.get("/recipe/search").then(response => {
//             this.setState({
//                 recipe: response.data.recipe_title
//             })
//             // console.log(response.data.recipe_name);
//             // console.log(response.data.recipe_title);
//         });
//     };

//     render() {
//         return (
//             <div onClick={this.handleButtonClick}>
//                 <button>Get recipe</button>
//                 <h1>The name of the recipe is: {this.state.recipe} </h1>
//             </div>
//         )
//     }
// }

export default function Search() {
    const [diets] = useState([
        { diet_name: "Gluten Free" },
        { diet_name: "Ketogenic" },
        { diet_name: "Vegetarian" },
        { diet_name: "Lacto-Vegetarian" },
        { diet_name: "Ovo-Vegetarian" },
        { diet_name: "Vegan" },
        { diet_name: "Pescetarian" },
        { diet_name: "Paleo" },
        { diet_name: "Primal" },
        { diet_name: "Whole30" }    
    ]);

    const [cuisines] = useState([
        { cuisine_name: "American" },
        { cuisine_name: "British" },
        { cuisine_name: "Cajun" },
        { cuisine_name: "Caribbean" },
        { cuisine_name: "Chinese" },
        { cuisine_name: "Eastern European" },
        { cuisine_name: "European" },
        { cuisine_name: "French" },
        { cuisine_name: "German" },
        { cuisine_name: "Greek" },
        { cuisine_name: "Indian" },
        { cuisine_name: "Irish" },
        { cuisine_name: "Italian" },
        { cuisine_name: "Japanese" },
        { cuisine_name: "Jewish" },
        { cuisine_name: "Korean" },
        { cuisine_name: "Latin American" },
        { cuisine_name: "Mediterranean" },
        { cuisine_name: "Mexican" },
        { cuisine_name: "Middle Eastern" },
        { cuisine_name: "Nordic" },
        { cuisine_name: "Southern" },
        { cuisine_name: "Spanish" },
        { cuisine_name: "Thai" },
        { cuisine_name: "Vietnamese" }
    ]);

    const [intolerances] = useState([
        { intolerances_name: "Dairy" },
        { intolerances_name: "Egg" },
        { intolerances_name: "Gluten" },
        { intolerances_name: "Grain" },
        { intolerances_name: "Peanut" },
        { intolerances_name: "Seafood" },
        { intolerances_name: "Sesame" },
        { intolerances_name: "Shellfish" },
        { intolerances_name: "Soy" },
        { intolerances_name: "Sulfite" },
        { intolerances_name: "Tree Nut" },
        { intolerances_name: "Wheat" }
    ]);

    // useEffect(() => {
    //     async function getDropdownData() {
    //         const response = await axios.get("/index");
    //         const data = response.data;
    //         console.log(data);
    //     }
    //     getDropdownData();
    // }, []);

    return (
        <div className='search-container'>
            <form>
                <div className='search-fields-container'>
                    <div className='field-top-row'>
                        <div className="single-dropdown-wrapper">
                            <select className="single-dropdown" placeholder="Diet">
                                <option default>Diet</option>
                                {diets.map(diet => (
                                    <option key={diet.diet_name} value={diet.diet_name}>{diet.diet_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="single-dropdown-wrapper">
                            <select className="single-dropdown">
                                <option default>Cuisine</option>
                                {cuisines.map(cuisine => (
                                    <option key={cuisine.cuisine_name} value={cuisine.cuisine_name}>{cuisine.cuisine_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="single-dropdown-wrapper">
                            <select className="single-dropdown">
                                <option default>Intolerence</option>
                                {intolerances.map(intolerances => (
                                    <option key={intolerances.intolerances_name} value={intolerances.intolerances_name}>{intolerances.intolerances_name}</option>
                                ))}
                            </select>    
                        </div>
                    </div>
                    <div className='field-bottom-row'>
                        <div className="double-dropdown-wrapper">
                            <select className="double-dropdown">
                                <option default>Min Calories</option>
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Calories</option>
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select className="double-dropdown">
                                <option default>Min Protein</option>
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Protein</option>
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select className="double-dropdown">
                                <option default>Min Carbs</option>
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Carbs</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className="search-button">Find Recipes</button>
            </form>
        </div>
    )
}

