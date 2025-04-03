function SampleInput(props) {
    return (
        <div>
            <label>{props.label}</label><br/>
            <input type="text" id={props.fieldName} name={props.fieldName} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default SampleInput;