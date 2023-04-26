import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About'
import Detail from './components/Detail/Detail'


function App() {

   const [characters, setCharacters] = useState([])


   const onClose = (id) => {
      const newCharacters = characters.filter((character) => character.id !== Number(id))
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
         <Routes> {/* Contains all the routes*/} {/* And Route indicates in what path the element should be rendered*/}
            <Route path = '/home' element = {<Cards characters = {characters} id = {characters.id} onClose = {onClose}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail characters = {characters}/>}/> {/*dynamic path will always match the path that is being used, and so, it will always render the elment.*/}
         </Routes> {/*If it doesn't match, the element won't be rendered, it will only be rendered in the specified path. E.g. '/detail/id' => Won't render anything, since I didn't ñink any element to that path yet*/}
      </div> // Now, if I use dynamic, it will match the path on the card element : <NavLink to = {`/detail/${id}`}> When. I click in the element affected by this NavLink, it will change the URL to detail/(and the id).
      // Then, Route path will take this id value and assign it after the colon, so it looks like: /detail/1 (for example). If I change the element to : <NavLink to = {`/detail/card`}>, then the dynamic path will take card as value.
   );
}
 
export default App;