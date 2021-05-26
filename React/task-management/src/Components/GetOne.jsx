import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";

const GetOne = ({ index }) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const id = parseInt(index);

    useEffect(() => {
        axios
            .get(`http://localhost:9092/index.html/getOne/${id}`)
            .then((response) => {
                console.log(response);
                setData(response.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setIsLoaded(true);
            });
    }, [])
    console.log(data);

    if (error) {
        return (
            <h1>something went wrong {error.message}</h1>
        )
    } else if (!isLoaded) {
        return (
            <h1>loading please wait</h1>
        )
    } else {
        return (
            <>
                <table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Importance</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.importance}</td>
                            <td>{data.completed.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

}

export default GetOne;