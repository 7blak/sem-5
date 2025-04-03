import './App.css';
import CharactersList from './CharactersList'
import CharacterForm from './CharacterForm';
import SearchBar from './SearchBar';
import peopleData from './data';

function App() {
  function addCharacterHandler() {
    console.log("Adding character");
  }

  function searchHandler() {
    console.log("Search performed");
  }

  return (
    <div className="App">
      <SearchBar searchButtonHandler={searchHandler}/>
      <CharactersList data={peopleData}/>
      <CharacterForm addCharacterButtonHandler={addCharacterHandler}/>
    </div>
  );
}

export default App;
