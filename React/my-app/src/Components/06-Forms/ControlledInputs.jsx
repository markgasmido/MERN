import { useState } from "react";

const ControlledInputs = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();
        const dataToSend = JSON.stringify({userName},{password});
        console.log(dataToSend);
        setUserName("");
        setPassword("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="username"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <h1>{userName}</h1>
        </>

    )
}

export default ControlledInputs;