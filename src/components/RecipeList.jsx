export default function RecipeList({recipes, handleSelect, addBtn}) {
    return(
        
        <div className="w-40  bg-gray-800 text-white">
            <div className="bg-gray-950 py-2 px-1 text-white flex justify-between">
                <span>Recipes:</span>
                {<button className="bg-green-400 text-gray-900  px-1 mr-1 rounded-md font-medium  inline   hover:bg-green-700 " onClick={()=>addBtn(true)}>Add</button>}
            </div>
            <ul className="p-1">
            {recipes.map((el)=>{
            return(
                <li key={el.id} className="p-1 border-b border-slate-600 hover:bg-gray-900" onClick={()=>handleSelect(el.id)}>{el.name}</li>
            )
        })}
        </ul>
        </div>
        
        
        
    )
}