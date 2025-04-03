function SampleInput(props) {
    return (
        <div>
            <label>{props.label}</label><br/>
            <input type="text" id={props.fieldName} name={props.fieldName} />
        </div>
    )
}

export default SampleInput;