import { useState } from "react";

const SearchBar = () => {

    const [search,setSearch] = useState("");
    return (
        <>
        <label>Search</label>
        <input 
            type="text"
            name="search"
            id="search" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
        <button>Search</button>
        </>
    )
}

export default SearchBar;