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

    const [calories] = useState([
        { label: "50kCal", value: 50 },
        { label: "100kCal", value: 100 },
        { label: "200kCal", value: 200 },
        { label: "300kCal", value: 300 },
        { label: "400kCal", value: 400 },
        { label: "500kCal", value: 500 },
        { label: "600kCal", value: 600 },
        { label: "700kCal", value: 700 },
        { label: "800kCal", value: 800 },
    ]);

    const [protein] = useState([
        { label: "10g", value: 10 },
        { label: "20g", value: 20 },
        { label: "30g", value: 30 },
        { label: "40g", value: 40 },
        { label: "50g", value: 50 },
        { label: "60g", value: 60 },
        { label: "70g", value: 70 },
        { label: "80g", value: 80 },
        { label: "90g", value: 90 },
        { label: "100g", value: 100 },
    ]);

    const [carbs] = useState([
        { label: "10g", value: 10 },
        { label: "20g", value: 20 },
        { label: "30g", value: 30 },
        { label: "40g", value: 40 },
        { label: "50g", value: 50 },
        { label: "60g", value: 60 },
        { label: "70g", value: 70 },
        { label: "80g", value: 80 },
        { label: "90g", value: 90 },
        { label: "100g", value: 100 },
    ]);

    const [selectedDiet, setSelectedDiet] = useState("");

    const handleChange = (event) => {
        // setSelectedDiet(event.target.value);
        console.log(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`Submitting Diet ${selectedDiet}`);
    }

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
            <form onSubmit={handleSubmit}>
                <div className='search-fields-container'>
                    <div className='field-top-row'>
                        <div className="single-dropdown-wrapper">
                            <select name="selectedDiet" className="single-dropdown" placeholder="Diet">
                                {/* <option default>Diet</option> */}
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
                                {calories.map(calories => (
                                    <option key={calories.value} value={calories.value}>{calories.label}</option>
                                ))}
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Calories</option>
                                {calories.map(calories => (
                                    <option key={calories.value} value={calories.value}>{calories.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select className="double-dropdown">
                                <option default>Min Protein</option>
                                {protein.map(protein => (
                                    <option key={protein.value} value={protein.value}>{protein.label}</option>
                                ))}
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Protein</option>
                                {protein.map(protein => (
                                    <option key={protein.value} value={protein.value}>{protein.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select className="double-dropdown">
                                <option default>Min Carbs</option>
                                {carbs.map(carbs => (
                                    <option key={carbs.value} value={carbs.value}>{carbs.label}</option>
                                ))}
                            </select>
                            <select className="double-dropdown">
                                <option default>Max Carbs</option>
                                {carbs.map(carbs => (
                                    <option key={carbs.value} value={carbs.value}>{carbs.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <button className="search-button" type="submit">Find Recipes</button>
            </form>
        </div>
    )
}

