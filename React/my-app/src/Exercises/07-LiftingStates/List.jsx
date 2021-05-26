const List = () => {
    return (
        <>
        {List.map((tempVal) =>{
            <div key={tempVal.id}>
                <h3></h3>
            </div>
        })}
        </>
    )
}
export default List;