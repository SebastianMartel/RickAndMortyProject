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
import Error from './components/Error404/Error';

import BackgroundPortal from './Img/BackgroundPortal.jpg'
import AboutBackground from './Img/AboutBackground.png'
import FormBackground from './Img/FormBackground.jpg'
import FormBackgroundBlur from './Img/FormBackgroundBlur.png'


function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   const email = 'email@email.com'
   const password = 'password99'
   const Navigate = useNavigate()
   const { pathname } = useLocation()

   const login = (userData) => {
      // PREV:
      // if (userData.email === email && userData.password === password) {
      //    setAccess(true);
      //    Navigate('/home')
      // }
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && Navigate('/home');
      });
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
            const exists = characters.find((char) => char.id === data.id)
            if(!exists) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('Personaje ya agregado!')
            }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      })
      .catch((error) => {
         console.error(error);
         alert('¡No hay personajes con este ID!');
       });
   }

   const addRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;

      axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
         if (data.name) {
            const notFound = characters.find((char) => char.id === data.id);
            if (!notFound) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡Personaje ya agregado!');
            }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   useEffect(() => {
      !access && Navigate('/')
   }, [access, Navigate]) // added 'Navigate' to the array.


   useEffect(() => {
      if (pathname === '/') {
        document.body.style.backgroundImage = `url(${FormBackgroundBlur})`;
      //   document.body.style.alignItems = 'center';
      //   document.body.style.display = 'flex';
      document.body.style.display = 'flex';
      document.body.style.justifyContent = 'center';
      document.body.style.alignItems = 'center';
      document.body.style.height = '100vh';
      } 
      else if (pathname === '/home' || pathname === '/favourites') {
         document.body.style.backgroundImage = `url(${BackgroundPortal})`;
         document.body.style.display = 'block';
         document.body.style.height = '96vh';
      }
      else {
        document.body.style.backgroundImage = `url(${AboutBackground})`;
        document.body.style.display = 'block';
        document.body.style.height = '96vh';

      }
    }, [pathname]);
   

   return (
      <div className='App'>
         {
            pathname !== '/' && <Nav onSearch = {onSearch} addRandom = {addRandom}/>
         } {/*Will it work? */}
         <Routes> {/* Contains all the routes*/} {/* And Route indicates in what path the element should be rendered*/}
            <Route exact path = '/' element = {<Forms login = {login}/>}/>
            <Route path = '/home' element = {<Cards characters = {characters} onClose = {onClose}/>}/> {/* REMOVED id = {characters.id} */}
            <Route exact path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail characters = {characters}/>}/> {/*dynamic path will always match the path that is being used, and so, it will always render the elment.*/}
            <Route path = '/favourites' element = { <Favourites />}/>
            <Route path = '*' element = { <Error/> }/> {/*Not working, only with NavLink to:'...' */}
         </Routes> {/*If it doesn't match, the element won't be rendered, it will only be rendered in the specified path. E.g. '/detail/id' => Won't render anything, since I didn't ñink any element to that path yet*/}
      </div> // Now, if I use dynamic, it will match the path on the card element : <NavLink to = {`/detail/${id}`}> When. I click in the element affected by this NavLink, it will change the URL to detail/(and the id).
      // Then, Route path will take this id value and assign it after the colon, so it looks like: /detail/1 (for example). If I change the element to : <NavLink to = {`/detail/card`}>, then the dynamic path will take card as value.
   );
}
 
export default App;