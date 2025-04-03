import SampleInput from './SampleInput'

function CharacterForm(props) {

    return (
        <div>
            <SampleInput fieldName="name" label="Name ..."/>
            <SampleInput fieldName="email" label="Email ..."/>
            <SampleInput fieldName="url" label="Avatar URL ..."/>
            <button onClick={props.addCharacterButtonHandler}>Add</button>
        </div>
    )
}

export default CharacterForm;