const ComponentWithProps = (props) => {
    return(
        <>
        <h1>Hello</h1>
        <p>{props.booleanProp}</p>
        <p>{props.numberProp}</p>
        </>
    )
}

export default ComponentWithProps;