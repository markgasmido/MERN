import { useState } from "react";

const Shopping = () => {
    const [items, setItems] = useState("");

    const addItem = event => {
        event.preventDefault();
        setItems([...items, { id: item.length, name: itemName }]);
        setItemName("");
    }


    return (
        <>
            <form onSubmit={addItem}>
                <input type="text" name="Item" placeholder="Enter an item" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                <button type="submit">Add </button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} </li>
                ))}
            </ul>
        </>
    );
}
export default Shopping;