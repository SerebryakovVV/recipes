import Step from "./Step"
import Timer from "./Timer";

export default function RecipeSteps({activeRecipe}) {

    console.log(activeRecipe);

    return(
        <div className="grow bg-gray-600">

            <div className="bg-gray-950 py-2 px-1 text-white">
                Steps:
            </div>

            <div>
                
                <div className="flex justify-around p-2 mb-8">

                    {activeRecipe.timers.map((t)=>{
                        return <Timer name={t.name} hour={t.hour} min={t.min} sec={t.sec}/>
                    })
                    
                }
                    
                </div>
            
                <ul>
                        {activeRecipe.steps.map((el)=>{
                            return(
                                <Step key={el.id} el={el}/>
                            )
                        })}
                </ul>
                    
            </div>

        </div>
    )
}