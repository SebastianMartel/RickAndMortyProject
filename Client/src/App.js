import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Favourites from './components/Favourites/Favourites';
import Forms from './components/Forms/Forms';

import backgroundPortal from './Img/BackgroundPortal.jpg'
import FormBackground from './Img/FormBackground.jpg'


function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   const email = 'email@email.com'
   const password = 'password99'
   const Navigate = useNavigate()
   const location = useLocation()

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         Navigate('/home')
      }
   }

   // const logout = () => {} LogOut

   const onClose = (id) => {
      const newCharacters = characters.filter((character) => character.id !== Number(id)) // i parameter can be used to keep track of the current element being iterated. So that it only removes the current card and not ALL that matches the id (doesn't work as expected).
      setCharacters(newCharacters)
   }

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

   useEffect(() => {
      !access && Navigate('/')
   }, [access, Navigate]) // added 'Navigate' to the array.


   useEffect(() => {
      if (location.pathname === '/') {
        document.body.style.backgroundImage = `url(${FormBackground})`;
      } else {
        document.body.style.backgroundImage = `url(${backgroundPortal})`;
      }
    }, [location.pathname]);
  

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch = {onSearch}/>
         }
         <Routes> {/* Contains all the routes*/} {/* And Route indicates in what path the element should be rendered*/}
            <Route exact path = '/' element = {<Forms login = {login}/>}/>
            <Route path = '/home' element = {<Cards characters = {characters} id = {characters.id} onClose = {onClose}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail characters = {characters}/>}/> {/*dynamic path will always match the path that is being used, and so, it will always render the elment.*/}
            <Route path = '/favourites' element = {<Favourites/>}/>
         </Routes> {/*If it doesn't match, the element won't be rendered, it will only be rendered in the specified path. E.g. '/detail/id' => Won't render anything, since I didn't ñink any element to that path yet*/}
      </div> // Now, if I use dynamic, it will match the path on the card element : <NavLink to = {`/detail/${id}`}> When. I click in the element affected by this NavLink, it will change the URL to detail/(and the id).
      // Then, Route path will take this id value and assign it after the colon, so it looks like: /detail/1 (for example). If I change the element to : <NavLink to = {`/detail/card`}>, then the dynamic path will take card as value.
   );
}
 
export default App;