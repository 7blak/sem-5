function CharacterListItem({character}) {
    return (
        <div>
            <img src={character.avatarUrl} alt=""/>
            <p>{character.name}</p>
            <p>{character.email}</p>
        </div>
    )
}

export default CharacterListItem;