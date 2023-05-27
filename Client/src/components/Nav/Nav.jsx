import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

import NavLogo from '../../Img/NavLogo.png'
import NavBackground from '../../Img/NavOp1.png'

const StyledNav = styled.nav `
    /* position: fixed;*/
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.2rem;
    // margin: 1.5%;
    padding: 10px;
    height: 6rem;
    background-image: url(${NavBackground});
    // background-image: linear-gradient(to left, #DA8787, #E1B07E, #434469, #01161E);
    background-repeat: no-repeat;
    border: none;
    border-radius: 10px;
`

const StyledButtons = styled.button `
    margin: 1rem;
    padding: 10px 0;
    width: 7rem;
    background-color: #067574;
    border: none;
    font-family: 'Archivo Black', sans-serif;
    font-size: 1rem;
    color: #FFEF00;
    box-shadow: 5px 5px #0D1F2D;

    &:hover {
        background-color: #FFEF00;
        color: #067574;
        cursor: pointer;
    }
`



export default function Nav({ onSearch, addRandom }) {
    return (
        <StyledNav>
            <img src = {NavLogo} style = {{margin: '10px'}} alt = 'Navigation Bar'></img>
            <NavLink to = '/home'> {/* Adds an extra functionality to the element. In this case the functionaility is to change the url to the specified path inside 'to' attribute*/}
                    <StyledButtons>Home</StyledButtons>
            </NavLink>
            <NavLink to = '/favourites'>
                    <StyledButtons>Favourites</StyledButtons>
            </NavLink>
            <NavLink to = '/about'>
                    <StyledButtons>About Me</StyledButtons>
            </NavLink>

            <SearchBar onSearch = {onSearch} />

            <button onClick = {addRandom}>?</button>
        </StyledNav>
    );
 }