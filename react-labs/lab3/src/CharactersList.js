import "./App.css"
import CharacterListItem from "./CharacterListItem"

function CharactersList({data, onDeleteCharacter, onSaveCharacter}) {
    return (
        <div>
            {data.map((character, index) => (
            <div key={index}>
                    <CharacterListItem character={character}
                        onDelete={() => onDeleteCharacter(character)}
                        onSave={onSaveCharacter}                    />
            </div>
            ))}
        </div>
    )
}

export default CharactersList;