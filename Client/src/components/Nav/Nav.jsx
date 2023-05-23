import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";


const styledDiv = styled.div `
`

export default function Nav({ onSearch }) {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
                <NavLink to = '/home'> {/* Adds an extra functionality to the element. In this case the functionaility is to change the url to the specified path inside 'to' attribute*/}
                    <button>Home</button>
                </NavLink>
                <NavLink to = '/favourites'>
                    <button>Favourites</button>
                </NavLink>
                <NavLink to = '/about'>
                    <button>About Me</button>
                </NavLink>
        </nav>
    );
 }