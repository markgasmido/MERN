import { useEffect, useState } from "react";

const FilmRequest = () => {
    const [error,setError] = useState(null);
    const [query,setQuery] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    
    useEffect(() =>{
        axios
            .get("{URL/:id}")
            .then(res => res)
            .then((result) =>{
                setIsLoaded(true);
                setItems(result.da)
            })
    })
}

export default FilmRequest;