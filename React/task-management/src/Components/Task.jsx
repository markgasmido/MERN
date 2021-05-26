const Task = ({completed,description,id,importance,title}) => {


    return (
        <>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{importance}</td>
            <td>{completed.toString()}</td>
        </>
    )

}

export default Task;