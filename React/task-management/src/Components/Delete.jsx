import axios from "axios";
import { useEffect, useState } from "react";
import GetAll from "./GetAll";

const Delete = ({index}) => {
    
    const[isLoaded,setIsLoaded] = useState(false);
    const[error,setError] = useState(null);
    const id = parseInt(index);

    useEffect(()=>{
        axios
            .delete(`http://localhost:9092/index.html/remove/${id}`)
            .then((response) => {
                console.log(response);
                setIsLoaded(true);
            })
            .catch((error)=>{
                console.log(error);
                setIsLoaded(true);
                setError(error);
            })
        },[])


    if(error){
        return(

            <h1>something went wrong {error.message}</h1>
            )
    }else if(!isLoaded){
        return(

            <h1>loading please wait</h1>
            )
    }else{
        return(
            <>
                <h1>entry deleted</h1>
                <h1>remaining tasks:</h1>
                <GetAll/>
            </>
        )
    }
}

export default Delete;