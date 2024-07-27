import { useState } from "react"

export default function Ingridient({el}) {
   
    const [checked, setChecked] = useState(false)


    return(
        <li  className={`${checked && "line-through"} p-1 border-b border-slate-500 hover:bg-gray-900`}  onClick={()=>setChecked(!checked)}>
            {el.name}         
        </li>
    )
   
   
   
}