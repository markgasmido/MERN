import { useState } from "react";

const Different = () => {

const [edit,setEdit] = useState(false);
    
    return(
        <>
        <p>the current value of edit is {edit.toString()}</p> 
        {
            edit? <p>TRUE</p> : <p>FALSE</p>
        }
        <button onClick={() => setEdit(c=>!c)}>updateee</button>
        </>
    )
}

export default Different;