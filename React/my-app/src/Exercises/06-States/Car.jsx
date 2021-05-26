import { useState } from "react";

const Car = () => {
    const [brand,setBrand] = useState("");
    const [model,setModel] = useState("");
    const [colour,setColour] = useState("");
    const [year,setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = JSON.stringify([{brand},{model},{colour},{year}]);
        console.log(dataToSend);
        setBrand("");
        setModel("");
        setColour("");
        setYear("");
    }

    return(
        <>
            <h1>EXERCISE 1</h1>
            <form onSubmit={handleSubmit}>
                <label>Brand</label>
                <input
                    type="text"
                    name="brand"
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <label>Model</label>
                <input
                    type="text"
                    name="model"
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
                <label>Colour</label>
                <input
                    type="text"
                    name="colour"
                    id="colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                />
                <label>Year</label>
                <input
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <p>{brand} {model} {colour} {year}</p>
        </>
    )
}

export default Car;