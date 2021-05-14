import React from 'react'
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
    return (
        <div className='search-container'>
            <div className='search-fields-container'>
                <div className='field-top-row'>
                    <div className="single-dropdown-wrapper">
                        <select className="single-dropdown" placeholder="Diet">
                            <option default>Diet</option>
                        </select>
                    </div>
                    <div className="single-dropdown-wrapper">
                        <select className="single-dropdown">
                            <option default>Cuisine</option>
                        </select>
                    </div>
                    <div className="single-dropdown-wrapper">
                        <select className="single-dropdown">
                            <option default>Intolerence</option>
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
        </div>
    )
}

