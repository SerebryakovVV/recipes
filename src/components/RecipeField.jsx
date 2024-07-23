import { useState } from "react"

import RecipeList from "./RecipeList"
import RecipeIngridients from "./RecipeIngridients"
import RecipeSteps from "./RecipeSteps"
import RecipeTimers from "./RecipeTimers"

export default function RecipeField({recipesDB, addBtn}) {

    const [recipes, setRecipes] = useState(recipesDB);
    const [activeRecipe, setActiveRecipe] = useState(recipes[0]);

    const handleSelect = (id) => {
        setActiveRecipe(recipes.filter((el)=>el.id == id)[0]);
        console.log(activeRecipe);
    }

    return(
        <div className="flex h-screen">
            <RecipeList recipes={recipes} handleSelect={handleSelect} addBtn={addBtn}/>
            <RecipeIngridients activeRecipe={activeRecipe}/>
            <RecipeSteps activeRecipe={activeRecipe}/>
        </div>
    )
}