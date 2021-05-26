import { useState } from "react";

const ProductTable = () => {
    const exampleTable = [];
    const [filter,setFilter] = useState("");

    const handleSubmit = () => {
        e.preventDefault();
        const dataToSend = [];
        dataToSend.push();
    }

    const findSimilar = () => {
        const matches = [];
        {exampleTable.map((match,index) =>(

        ))}
    }

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <label>Filter</label>
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <button type="submit">Filter</button>
            </form>
            <h1>{filter}</h1>
        </>
    )

}