import { useState } from "react"
import Delete from "./Delete";

const DeleteSearch = () => {
    
    const [toDelete, setDelete] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(toDelete);
        setSubmit(true);
    }

    if(submit){
        return(
            <Delete
                index={toDelete}
            />
        )
    }
    return(
        <>
        <h1>Enter ID of entry you want to delete</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="delete"
                id="delete"
                value={toDelete}
                onChange={e => setDelete(e.target.value)}
            />
            <button type="submit">DELETE</button>
        </form>
        </>
    )


}

export default DeleteSearch;