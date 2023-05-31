// RESPONSIVE:
// @media screen and (max-width: 480px) {
//   /* mobile */
// }
// @media screen and (min-width: 481px) and (max-width: 768px) {
//   /* tablet */
// }
// @media screen and (min-width: 769px) {
//   /* desktop */
// }
// 
//
// Tasks: 
//
// 1) SHOW | HIDE state CLEAN UP (REACT-HOOKS, 37 a => 1:41:25 - 1:46:50)
//
// DONE 2) block submit buttons if requirements are not accomplished.
//
// DONE 3) prevent default sumbit (prevent to reload page after form submission).
//
// 4) add -> id <- to the array of dependencies in src\components\Card\Card.jsx to avoid the warning message.
//
// NOPE 5) make handleOrder & handleFilter work at the same time. 
//
// DONE 6) add a functionality that shows all fav characters in the select filter.
// 
// DONE 7) not repeat characters.
// 
// DONE 8) random character.
// 
// DONE 9) error 404 for not found route.
// 
// DONE 10) log out redirects to form.
// 
// DONE 11) close button from myFavourite Cards removes card from fav component too. 
//  
// DONE: FIRST APPROACH 11.5) onClose function isn't being passed to the myFavourite elements (probably because of the server).
//     One approach: pass the onClose function directly to the Favourites component. Then, send this as props to the Card component that are being rendered in map function. onClose currently removes the characters state and from myFavourites state from the reducer.
//     Another option is to assign a onClose function only for favourites that remove only the card from myFavourites state: create a new onClose function in Favourites component and dispatch removeFav(id)
//     IN /FAVOURITES:
//     1) onClose function removes card from myFavourites and characters
//     2) onClose functino removes card only from myFavourites
//     3) remove close button from myFavourites
//
//     ON /HOME, INSIDE LIKE CARDS:
//     1) onClose function removes card from myFavourites and characters
//     2) onClose function removes card only from characters
//
// DONE 12) Nav margin-top is being added OUTSIDE the body element, unnecessary scroll bar on the right side.
//      OPT 1: remove margin, margin-top, affected components: App.css, SearchBar.jsx
//      OPT 2: remove margin of: App.css. Change height to 96(max before scroll bar appears) in rest of paths, or change the height to the full body to 96vh.
//             Affected components: App.js (or: App.css)
//      I think it's because of elements inside the navBar margin
// 
// DONE 13) render buttons inside the searchBar
// 
// DONE 14) if alive, green; if dead, red
//
// DONE: INSTALLED 15) missing Redux dependency, check for it before installing.
//
// 16) Consider deleting data.js, since it's not being used.
