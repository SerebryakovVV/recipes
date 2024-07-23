import { useState, useEffect, useRef, act } from "react"

export default function Timer({name, hour, min, sec}) {
 
    const [hours, setHours] = useState(hour);
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);
    const [active, setActive] = useState(false);

    const intervalId = useRef();
    const canv = useRef();

    const totalTime = Number(hour)*60*60 + Number(min)*60 + Number(sec);

    useEffect(()=>{
        if (hours <= 0 && minutes <= 0 && seconds <= 0) return;
        if (!active) return;
        
        intervalId.current = setInterval(()=>{
            if (seconds > 0) {
                setSeconds((s)=>s-1);
            } else {
                if (minutes > 0) {
                    setMinutes((m)=>m-1);
                    setSeconds(59);
                } else {
                    setHours((h)=>h-1);
                    setMinutes(59);
                    setSeconds(59);
                }
                
            }
        }, 10);

        let currentTime = hours*60*60 + minutes*60 + seconds;
        let rad = 1 - (currentTime / totalTime);
        let ctx = canv.current.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "rgb(51 65 85)"; 
        ctx.rect(0, 0, 100, 100);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "rgb(74 222 128)";
        ctx.lineWidth = 4;
        // ctx.fillStyle = "white";
        ctx.arc(50, 50, 45, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * rad);
        ctx.stroke();
        ctx.closePath();
        return ()=>clearInterval(intervalId.current);
    }, [seconds, active]);


    console.log(seconds);
    return(
        <div className="box-content border-2 border-gray-400 h-[130px] w-[100px] bg-slate-700 " onClick={()=>setActive(!active)}>


        <div className="relative h-[100px]">
            <div className="text-white absolute h-[20px] top-[40px] left-[25px] z-10">
                {hours}:
                {minutes < 10 ? `0${minutes}` : `${minutes}`}
                {seconds < 10 ? `:0${seconds}` : `:${seconds}`}
            </div>
            
                    <canvas className="absolute top-0" ref={canv} width={100} height={100}></canvas>
        </div>

           
        
        
        <div className="h-[30px] text-center align-middle text-white">{name}</div>
     </div>
    )



}







