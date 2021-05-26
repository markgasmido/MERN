import { Link } from 'react-router-dom';

const Nav = () => {
    return (

        <>
            <Link to="/">Home</Link>
            <Link to="/getOne">get one</Link>
            <Link to="/getAll">get all</Link>
            <Link to="/remove">delete</Link>
        </>
    )
}
export default Nav;