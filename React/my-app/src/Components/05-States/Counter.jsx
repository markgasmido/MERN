import { useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {

    //1. stateful value
    //2. a function to update the stateful value
    let [count, setCount] = useState(0);

    const increment = () => {
        console.log("yessssss upupupupupup");
        count++;
        setCount(tempValue => tempValue +1);
    }

    return (
        <>
            <h1>The current value of the counter is {count} </h1>
            <ChildCounter
                count={count} />
                <button onClick={increment}>++</button>
                <button onClick={()=> setCount(tempValue => tempValue -1)}>--</button>
        </>
    )
}

export default Counter;
