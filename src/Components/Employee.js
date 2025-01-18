function Employee(props) {
    return (
        <>
            <h2 className="text-3xl font-semibold">Employee name: {props.name}</h2>
            <p>Role:</p> 
            {props.role ? <p className="role">{props.role}</p> : <span className="norole">No role</span>}

        </>

    )
}

export default Employee