import { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";
import { Table, Container} from 'reactstrap';


const GetAll = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:9092/index.html/getAll")
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
    }, []);

    if (error) {
        return (
            <>
                <h1>Something went wrong</h1>
                <h2>STATUS CODE: {error.message}</h2>
            </>
        )
    } else if (!isLoaded) {
        return (
            <h1>Please wait, the page is loading...</h1>
        )
    } else {
        return (
            <>
                    <h1>Tasks to do</h1>
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
                            {data.map((task,index) => (
                                <tr>
                                    <Task
                                        key={index}
                                        id={task.id}
                                        completed={task.completed}
                                        description={task.description}
                                        importance={task.importance}
                                        title={task.title}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </>

        )
    }

}

export default GetAll;