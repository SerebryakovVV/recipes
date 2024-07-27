import { useState } from "react";

export default function AddRecipe(props) {

    const [name, setName] = useState("");
    const [ingridients, setIngridients] = useState("");
    const [steps, setSteps] = useState("");
    const [timers, setTimers] = useState([{id:Date.now().toString(),name:"",hour:null,min:null,sec:null}])
        
    const handleChange = (el, field, value) => {
        setTimers(timers.map((timer)=>{
            if (timer.id === el.id) {
                let newTimer = {...timer};
                newTimer[field] = value;
                return newTimer;
            } else {
                return timer;
            }
        }))
    }

    const handleFinish = () => {
        let oldDB = JSON.parse(localStorage.getItem("recipesDB"));
        if (oldDB===null) {
            localStorage.setItem("recipesDB", "[]");
            oldDB = JSON.parse(localStorage.getItem("recipesDB"));
        }


        let newIngridients = ingridients.split(";").map((el)=>{
            return {id:Math.random(), name:el}
        });

        let newSteps = steps.split(";").map((el)=>{
            return {id:Math.random(), name:el}
        });

        console.log(newIngridients,newSteps);

        let newRecipe = {id:Date.now().toString(), name:name, ingridients:newIngridients,steps:newSteps,timers:timers};
        // let newRecipe = {id:Date.now().toString(), name:name, ingridients:ingridients.split(";"),steps:steps.split(";"),timers:timers};
        
        
        localStorage.setItem("recipesDB", JSON.stringify([...oldDB, newRecipe]));
        props.setIsAdding(false);
        props.setRecipesDB(JSON.parse(localStorage.getItem("recipesDB")));
    }

    return(
        <>
        <div className="min-h-screen  bg-gray-950 flex justify-center items-center">
            <div className=" h-4/5 w-96 py-6 rounded-xl text-white bg-gray-800 flex flex-col items-center gap-6">
                
            <div className="text-2xl">New Recipe</div>
                
                <input className="mb-6 w-4/5 h-8 pl-2 bg-gray-950 focus:ring-0 focus:outline-none rounded-md" value={name} placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)}/>
                <textarea className="w-4/5 h-14 pl-1 rounded-md bg-gray-950 focus:ring-0 focus:outline-none" value={ingridients} placeholder="Ingridients" onChange={(e)=>setIngridients(e.target.value)}/>
                <textarea className="mb-6 w-4/5 h-14 pl-1 rounded-md bg-gray-950 focus:ring-0 focus:outline-none" value={steps} placeholder="Steps" onChange={(e)=>setSteps(e.target.value)}/>
        
                <div className="text-lg">Timers</div>

                {timers.map((el)=>{
                    return(
                    <div className="w-4/5 flex gap-1">
                    <input className="p-1 grow-1 min-w-0 rounded-md bg-gray-950  focus:ring-0 focus:outline-none" placeholder="Name" type="text" value={el.name} onChange={(e)=>handleChange(el, "name", e.target.value)}/>
                    <input className="p-1 grow-1 min-w-0 rounded-md bg-gray-950  focus:ring-0 focus:outline-none" placeholder="Hours" type="text" value={el.hour} onChange={(e)=>handleChange(el, "hour", e.target.value)}/>
                    <input className="p-1 grow-1 min-w-0 rounded-md bg-gray-950  focus:ring-0 focus:outline-none" placeholder="Minutes" type="text" value={el.min} onChange={(e)=>handleChange(el, "min", e.target.value)}/>
                    <input className="p-1 grow-1 min-w-0 rounded-md bg-gray-950  focus:ring-0 focus:outline-none" placeholder="Seconds" type="text" value={el.sec} onChange={(e)=>handleChange(el, "sec", e.target.value)}/>
                    </div>
                    )
                })}
       

                <div className="flex gap-2">
                <button className=" bg-yellow-400 hover:bg-yellow-600 text-gray-900 p-1 rounded-md font-medium" onClick={()=>setTimers([...timers, {id:Date.now().toString(),name:"",hour:null,min:null,sec:null}])}>Add timer</button>


<button className="bg-green-400 text-gray-900 p-1 rounded-md font-medium hover:bg-green-700" onClick={handleFinish}>Finish</button>

                </div>

        
            </div>

        
        </div>
        
        </>
        )


}








