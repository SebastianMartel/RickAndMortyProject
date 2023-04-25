import './App.css';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';



function App() {

   const [characters, setCharacters] = useState([])


   const onClose = (id) => {
      const newCharacters = characters.filter((character) => character.id != id)
      setCharacters(newCharacters)
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      })
      .catch((error) => {
         console.error(error);
         alert('¡No hay personajes con este ID!');
       });
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Cards characters = {characters} id = {characters.id} onClose = {onClose}/>
      </div>
   );
}

export default App;