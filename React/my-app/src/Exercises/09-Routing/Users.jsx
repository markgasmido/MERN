import {useParams} from "react-router-dom";

const Users = () => {
    const {id} = useParams;
    return(
        <h1>user {id}</h1>
    )
}

export default Users;