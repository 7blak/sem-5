import SampleInput from './SampleInput'
import { useState } from 'react';

function CharacterForm({addCharacterHandler}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleNameChange = (e) => {setName(e.target.value);}
    const handleEmailChange = (e) => {setEmail(e.target.value);}
    const handleAvatarUrlChange = (e) => {setAvatarUrl(e.target.value);}

    const handleSubmit = () => {
        if (name && email && avatarUrl) {
            addCharacterHandler({name,email,avatarUrl});
            setName('');
            setEmail('');
            setAvatarUrl('');
        } else {
            alert("All fields are required!");
        }
    }
    return (
        <div>
            <SampleInput fieldName="name" label="Name ..." value={name} onChange={handleNameChange}/>
            <SampleInput fieldName="email" label="Email ..." value={email} onChange={handleEmailChange}/>
            <SampleInput fieldName="url" label="Avatar URL ..." value={avatarUrl} onChange={handleAvatarUrlChange}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default CharacterForm;