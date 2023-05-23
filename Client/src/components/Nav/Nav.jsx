import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

import NavLogo from '../../Img/NavLogo.png'


const StyledNav = styled.nav `
    /* position: fixed;*/
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.2rem;
    // margin: 1.5%;
    padding: 10px;
    height: 6rem;
    background-image: linear-gradient(to left, #DA8787, #E1B07E, #434469, #01161E);
    border: none;
    border-radius: 10px;
`
const StyledButtons = styled.button `
`



export default function Nav({ onSearch }) {
    return (
        <StyledNav>
            <img src = {NavLogo} style = {{margin: '10px'}}></img>
            <NavLink to = '/home'> {/* Adds an extra functionality to the element. In this case the functionaility is to change the url to the specified path inside 'to' attribute*/}
                    <StyledButtons>Home</StyledButtons>
            </NavLink>
            <NavLink to = '/favourites'>
                    <StyledButtons>Favourites</StyledButtons>
            </NavLink>
            <NavLink to = '/about'>
                    <StyledButtons>About Me</StyledButtons>
            </NavLink>

            <SearchBar onSearch={onSearch} />
        </StyledNav>
    );
 }