import ComponentWithProps from "./ComponentWithProps";

const PropsWithDifferentTypes = () => {
    const myNum = 2;
    const myString = "mark";
    const myBoolean = true;
    const myArray = ["Audi", "BMW", "Honda"];
    const myObject = {
        brand: "audi",
        model: "a5",
        features: ["heated seats", "DRL"],
        year: 2015
    }
    const myFunction = () => {
        "this is a string"
    }

    return (
        <ComponentWithProps
            numberProp={myNum}
            stringProp={myString}
            booleanProp={myBoolean}
            arrayProp={myArray}
            objectProp={myObject}
            functionProp={myFunction}
            />
    )
}

export default PropsWithDifferentTypes;