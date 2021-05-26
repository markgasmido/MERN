const AddGamers = ({functionProp,submitHandler,addHandler}) => {
    return (
        <>
            <form onSubmit={submitHandler} >
                <input type="text" name="newPlayer" id="newPlayer" onChange={functionProp} />
                <button type="button" onClick={addHandler}>BUTTON</button>
            </form>
        </>
    )
}

export default AddGamers;