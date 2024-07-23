import { useState } from 'react'
import './App.css'

import AddRecipe from './components/AddRecipe'
import RecipeField from './components/RecipeField';

function App() {
  const [recipesDB, setRecipesDB] = useState(JSON.parse(localStorage.getItem("recipesDB")));
  const [isAdding, setIsAdding] = useState(true);

  return (
    <>
    {isAdding ? <AddRecipe setIsAdding={setIsAdding} setRecipesDB={setRecipesDB}/> : <RecipeField recipesDB={recipesDB} addBtn={setIsAdding}/>}
    </>
  )
}

export default App




