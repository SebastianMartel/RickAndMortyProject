import axios from "axios"
import { useParams } from "react-router-dom" // access to the url dynamic parameter. Needs to match the dynamic parameter.
import { useState , useEffect} from "react"

import styled from "styled-components"

const MainDiv = styled.div `
    display: flex;
    justify-content: center;
    gap: 10rem;


    margin: 8% 0;
    padding: 2% 0;
    background-color: #FFFFFF90;
`

const Img = styled.img `
`

const TextDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center
`


export default function Detail () {

    const [character, setCharacter] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); // [id], prevents from calling useEffect as an infinite loop.
    
    return (
        <MainDiv>
            <Img src = {character?.image} alt = {`${character?.name}`}/>
            <TextDiv>
                <p>Name: {character?.name}</p>
                <p>Status: {character?.status}</p>
                <p>Specie: {character?.species}</p>
                <p>Gender: {character?.gender}</p>
                <p>Origin: {character?.origin?.name}</p>
            </TextDiv>
        </MainDiv>
    )
}