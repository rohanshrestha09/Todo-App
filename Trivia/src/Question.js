const Question = (props) => {
    return (
        <div className='questionSection'>
            <div>{props.database[props.index].id}</div>
        </div>
    )
}

export default Question