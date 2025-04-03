import SampleInput from "./SampleInput";

function SearchBar(props) {
    return (
        <div>
            <SampleInput fieldName="search" label="Search ..."/>
            <button onClick={props.searchButtonHandler}>Search</button>
        </div>
    )
}

export default SearchBar;