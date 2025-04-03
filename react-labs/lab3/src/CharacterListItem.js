import { useState } from 'react';

function CharacterListItem({ character, onDelete, onSave}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(character.name);
    const [editedEmail, setEditedEmail] = useState(character.email);
    const [editedAvatarUrl, setEditedAvatarUrl] = useState(character.avatarUrl);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (editedName && editedEmail && editedAvatarUrl) {
            onSave({ ...character, name: editedName, email: editedEmail, avatarUrl: editedAvatarUrl });
            setIsEditing(false);
        } else {
            alert("All fields are required!");
        }
    };

    const handleCancelClick = () => {
        setEditedName(character.name);
        setEditedEmail(character.email);
        setEditedAvatarUrl(character.avatarUrl);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                        <input type='text' value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                        <input type='text' value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                        <input type='text' value={editedAvatarUrl} onChange={(e) => setEditedAvatarUrl(e.target.value)} />
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                        <img src={character.avatarUrl} alt="" height={128} width={128} />
                        <p>{character.name}</p>
                        <p>{character.email}</p>
                        <button onClick={handleEditClick }>Edit</button>
                        <button onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default CharacterListItem;