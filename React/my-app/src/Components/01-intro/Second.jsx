const Second = () => {  
    const NAME = "marki";
    const DATE = new Date();
    

    console.log(DATE);


    return (
        <>
        <h1>Lets try and use some JS in this file</h1>
        <p>{NAME}</p>
        <p>{DATE.toLocaleDateString()}</p>
        </>
    )
}

export default Second;