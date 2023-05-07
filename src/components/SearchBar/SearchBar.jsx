import { useState } from "react";
import styled from "styled-components";

const SearchBarDiv = styled.div `
   /* position: fixed;*/
   display: flex;
   justify-content: flex-end;
   border-bottom: solid 1px black;
   background-image: linear-gradient(to right, #DA8787, #E1B07E, #434469, #01161E);
   height: 6rem;
   margin: 1.5%;
   border: none;
   border-radius: 10px;
` 
const AddButton = styled.button `
   background-color: #1CD777;
   font-family: 'Archivo Black', sans-serif;
   font-size: 1.5rem;
   color: white;
   border: none;
   border-radius: 5px;
   width: 10%;
   margin: 1.5rem 2rem;
   &:hover {
      background-color: #139451;
   }
`

const InputText = styled.input `
   background-color: biege;
   font-family: 'Archivo Black', sans-serif;
   font-size: 1.5rem;
   width: 15%;
   border-radius: 10px;
   margin: 1.5rem;
`


//border-image: linear-gradient(to bottom right, #CC95C0, #DBD4B4, #7AA1D2); searchbar background color
//border-image: linear-gradient(to bottom, #ffcc00, #ff0000) 1;
//animated searchBar backround, something special about the show, and not heavy to not overwhelm the ui


export default function SearchBar({onSearch}) {

   let [id, setId] = useState('')

   const handleChange = (event) => {
      const newId = event.target.value
      setId(newId)
   }

   return (
      <SearchBarDiv>
         <InputText type='search' onChange = {handleChange} value = {id} /* necessary to synchronize both id (state id and current element value)*//>
         <AddButton onClick={() => {onSearch(id); setId('')}}>Add</AddButton>
      </SearchBarDiv>
   );
}
