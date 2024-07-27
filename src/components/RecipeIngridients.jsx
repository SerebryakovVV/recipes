import Ingridient from "./Ingridient"

export default function RecipeIngridients({activeRecipe}) {
    return(
        <div className="w-40 bg-gray-700">
            <div className="bg-gray-950 py-2 px-1 text-white">
                Ingridients:
            </div>
            <ul className="text-white p-1">
            {activeRecipe.ingridients.map((el)=>{
                return(
                    <Ingridient key={el.id} el={el}/>
                )
            })}
            </ul>
        </div>
    )
}