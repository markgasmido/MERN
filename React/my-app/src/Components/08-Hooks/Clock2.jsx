import { useEffect, useState } from "react";

const Clock2 = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [click,setClick] = useState(false);



    useEffect(() => {
        console.log("hello");
        setTimeout(tick,1000);
    }) 
    //() => {},[] fires only once
    //() => {} keeps firing
    //() => [with a value] will run every time there is a change to that value

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    return(

        <>
        <h1>{time}</h1>
        <button onClick={()=>setClick(c=>!c)}>clickclick</button>
        </>
    )


}

export default Clock2;