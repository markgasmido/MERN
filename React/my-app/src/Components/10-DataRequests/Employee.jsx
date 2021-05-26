import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Employee = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
}

useEffect(() => {
    axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res)
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.data);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
            })
}, []);

if (error) {
    return <div>error :{error}</div>
} else if (!isLoaded) {
    return <div>loading!</div>
} else {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.employee_name}
                </li>
            ))}
        </ul>
    );
}

export default Employee;