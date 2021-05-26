import Baby from "./Baby";

const Child = (props) => {

    const{name,age} = props;

    
    return (
        <>
        <h2>This is a child</h2>
        <p>{name}</p>
        <p>{age}</p>
        <Baby 
            {...props}
        />
        </>

    )
    
    
}

export default Child;