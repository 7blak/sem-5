import {useState} from 'react';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearch = () => {
        props.searchButtonHandler(searchTerm);
    }
    return (
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;