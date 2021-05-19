import React, { useEffect, useState } from 'react'
import axios from "axios";

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
        { label: "50Cal", value: 50 },
        { label: "100Cal", value: 100 },
        { label: "200Cal", value: 200 },
        { label: "300Cal", value: 300 },
        { label: "400Cal", value: 400 },
        { label: "500Cal", value: 500 },
        { label: "600Cal", value: 600 },
        { label: "700Cal", value: 700 },
        { label: "800Cal", value: 800 },
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
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedIntolerance, setSelectedIntolerance] = useState("");

    const [selectedMinCal, setSelectedMinCal] = useState("");
    const [selectedMaxCal, setSelectedMaxCal] = useState("");

    const [selectedMinProt, setSelectedMinProt] = useState("");
    const [selectedMaxProt, setSelectedMaxProt] = useState("");

    const [selectedMinCarbs, setSelectedMinCarbs] = useState("");
    const [selectedMaxCarbs, setSelectedMaxCarbs] = useState("");

    const handleChange = (event) => {
        switch(event.currentTarget.name) {
            case "selectedDiet":
                setSelectedDiet(event.target.value);
                break;
            case "selectedCuisine":
                setSelectedCuisine(event.target.value);
                break;
            case "selectedIntolerance":
                setSelectedIntolerance(event.target.value);
                break;
            case "selectedMinCal":
                setSelectedMinCal(event.target.value);
                break;
            case "selectedMaxCal":
                setSelectedMaxCal(event.target.value);
                break;                
            case "selectedMinProt":
                setSelectedMinProt(event.target.value);
                break;
            case "selectedMaxProt":
                setSelectedMaxProt(event.target.value);
                break;
            case "selectedMinCarbs":
                setSelectedMinCarbs(event.target.value);
                break;
            case "selectedMaxCarbs":
                setSelectedMaxCarbs(event.target.value);
                break;
        }

        alert(event.target.value);
    }

    const handleSubmit = (event) => {
        axios.get('/recipe/search', {
            params: {
                diet: selectedDiet,
                // cuisine: selectedCuisine,
                // intolerance: selectedIntolerance,
                // minCal: selectedMinCal,
                // maxcal: selectedMaxCal,
                // minProt: selectedMinProt,
                // maxProt: selectedMaxProt,
                // minCarbs: selectedMinCarbs,
                // maxCarbs: selectedMaxCarbs
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit}>
                <div className='search-fields-container'>
                    <div className='field-top-row'>
                        <div className="single-dropdown-wrapper">
                            <select name="selectedDiet" onChange={handleChange} className="single-dropdown" placeholder="Diet">
                                <option disabled selected value>Diet</option>
                                {diets.map(diet => (
                                    <option key={diet.diet_name} value={diet.diet_name}>{diet.diet_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="single-dropdown-wrapper">
                            <select name="selectedCuisine" onChange={handleChange} className="single-dropdown">
                                <option disabled selected value>Cuisine</option>
                                {cuisines.map(cuisine => (
                                    <option key={cuisine.cuisine_name} value={cuisine.cuisine_name}>{cuisine.cuisine_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="single-dropdown-wrapper">
                            <select name="selectedIntolerance" onChange={handleChange} className="single-dropdown">
                                <option disabled selected value>Intolerance</option>
                                {intolerances.map(intolerances => (
                                    <option key={intolerances.intolerances_name} value={intolerances.intolerances_name}>{intolerances.intolerances_name}</option>
                                ))}
                            </select>    
                        </div>
                    </div>
                    <div className='field-bottom-row'>
                        <div className="double-dropdown-wrapper">
                            <select name="selectedMinCal" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Min Calories</option>
                                {calories.map(calories => (
                                    <option key={calories.value} value={calories.value}>{calories.label}</option>
                                ))}
                            </select>
                            <select name="selectedMaxCal" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Max Calories</option>
                                {calories.map(calories => (
                                    <option key={calories.value} value={calories.value}>{calories.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select name="selectedMinProt" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Min Protein</option>
                                {protein.map(protein => (
                                    <option key={protein.value} value={protein.value}>{protein.label}</option>
                                ))}
                            </select>
                            <select name="selectedMaxProt" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Max Protein</option>
                                {protein.map(protein => (
                                    <option key={protein.value} value={protein.value}>{protein.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="double-dropdown-wrapper">
                            <select name="selectedMinCarbs" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Min Carbs</option>
                                {carbs.map(carbs => (
                                    <option key={carbs.value} value={carbs.value}>{carbs.label}</option>
                                ))}
                            </select>
                            <select name="selectedMaxCarbs" onChange={handleChange} className="double-dropdown">
                                <option disabled selected value>Max Carbs</option>
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

