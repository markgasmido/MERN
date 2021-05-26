import Child from "./Child";

const Parent = () => {
    return (
        <>
            <h1>This is a parent</h1>
            <Child
                name="mark"
                age={6}
            />
        </>
    )

}

export default Parent;