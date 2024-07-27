import { useState } from "react"

export default function Step({el}) {
   
    const [done, setDone] = useState(false);

    console.log(done);

    return(
        <li className={`${done ? "border-green-400" : "border-gray-400"} max-w-96 mb-5 mx-4 rounded-md text-white p-1 border-2  bg-gray-700 `}  onClick={()=>setDone(!done)}>
            {el.name}         
        </li>
    )
   
   
   
}