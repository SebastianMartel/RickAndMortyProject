import SearchBar from "../SearchBar/SearchBar";

export default function Nav() {
    return (
        <>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </>
    );
 }