import { useState } from "react";
import styled from "styled-components";

const SearchBarDiv = styled.div `
   display: flex;
   justify-content: flex-end;
   height: 100%;
`

const InputText = styled.input `
   margin: 1.5rem; 
   padding: 15px;
   width: 10rem;
   background-color: biege;
   border: none;
   border-radius: 10px;
   font-family: 'Archivo Black', sans-serif;
   font-size: 1.5rem;
`

const AddButton = styled.button `
   margin: 1.5rem 2.5rem;
   width: 7rem;
   background-color: #1CD777;
   border: none;
   border-radius: 5px;
   font-family: 'Archivo Black', sans-serif;
   font-size: 1.5rem;
   color: white;

   &:hover {
      background-color: #139451;
      cursor: pointer;
   }
`


//border-image: linear-gradient(to bottom right, #CC95C0, #DBD4B4, #7AA1D2); searchbar background color
//border-image: linear-gradient(to bottom, #ffcc00, #ff0000) 1;
//animated searchBar backround, something special about the show, and not heavy to not overwhelm the ui


export default function SearchBar({ onSearch }) {

   let [id, setId] = useState('')

   const handleChange = (event) => {
      const newId = event.target.value;
      setId(newId)
   }

   return (
      <SearchBarDiv>
         <InputText placeholder='Id' type='search' onChange = {handleChange} value = {id} /* necessary to synchronize both id (state id and current element value)*//>
         <AddButton onClick={() => {onSearch(id); setId('')}}>Add</AddButton>
      </SearchBarDiv>
   );
}
