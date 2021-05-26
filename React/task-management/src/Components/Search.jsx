import axios from "axios";
import { useEffect, useState } from "react";
import GetOne from "./GetOne";

const Search = () => {
    const [search, setSearch] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSubmit(true);
    }

    if (submit) {
        return (
            <GetOne
                index={search}
            />
        )
    } else {
        return (
            <>
                <h1>SEARCH</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit">SUBMIT</button>
                </form>
            </>
        )
    }
}

export default Search;