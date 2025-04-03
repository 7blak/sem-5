import './App.css';
import CharactersList from './CharactersList'
import CharacterForm from './CharacterForm';
import SearchBar from './SearchBar';
import { peopleData } from './data';
import {useState} from 'react';

function App() {
  const [characters, setCharacters] = useState(peopleData);
  const [filteredData, setFilteredData] = useState(peopleData);

    const addCharacterHandler = (newCharacter) => {
        const updatedCharacters = [...characters, newCharacter];
        setCharacters(updatedCharacters);
    setFilteredData(updatedCharacters);
  }

  const searchHandler = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = characters.filter((person) => 
    person.name.toLowerCase().includes(term) ||
    person.email.toLowerCase().includes(term)
    );
  setFilteredData(filtered);
  };

  const deleteCharacterHandler = (characterToDelete)  => {
    const updatedData = filteredData.filter(character => character !== characterToDelete);
        setCharacters(updatedData);
    setFilteredData(updatedData);
    }

    const saveCharacterHandler = (updatedCharacter) => {
        const updatedCharacters = characters.map(character =>
            character.id === updatedCharacter.id ? updatedCharacter : character
        );
        setCharacters(updatedCharacters);
        setFilteredData(updatedCharacters);
    };

  return (
    <div className="App">
      <SearchBar searchButtonHandler={searchHandler}/>
          <CharactersList data={filteredData} onDeleteCharacter={deleteCharacterHandler} onSaveCharacter={saveCharacterHandler} />
      <CharacterForm addCharacterHandler={addCharacterHandler}/>
    </div>
  );
}

export default App;
