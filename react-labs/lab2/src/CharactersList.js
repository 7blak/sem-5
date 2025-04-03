import "./App.css"
import CharacterListItem from "./CharacterListItem"

function CharactersList({data}) {
    return (
        <div>
            {data.map((character, index) => (
            <div key={index}>
                <CharacterListItem character={character}/>
            </div>
            ))}
        </div>
    )
}

export default CharactersList;