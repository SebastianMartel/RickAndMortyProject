import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { addFav, removeFav } from "../../Redux/actions";

import styled from "styled-components";
import cardBorderImg from "../../Img/HolographicSilverFoil.jpg"


// CHECK HANDELCHARSTATUS.
const CardBox = styled.div `
   display: flex;
   flex-direction: column;

   margin: 0 auto 10px;
   padding: 10px 10px;
   max-width: 250px;
   background-image: linear-gradient(to right bottom, #CBC0AD, #86A397);
   border-radius: 7px;
   border: ${({ handleCharStatus, handleFavCharStatus }) => handleCharStatus || handleFavCharStatus ? '3px solid rgb(0,214,41)' : '3px solid red'};

   &:hover {
      
   }
`

const CardBoxImg = styled.img `
   display: flex;
   align-items: center;

   max-width: 250px;
   object-fit: cover;
   border: 7px solid;
   border-radius: 13px;
   border-image-source: url(${cardBorderImg});
   border-image-width: 10px;
   border-image-slice: 1
`

const CloseButton = styled.button `
   margin-bottom: 10px;
   align-self: flex-end;
   opacity: 0.5;
   border: none;
   border-radius: 3px;
   font-size: 1rem;
   box-shadow: 1px 1px 1px red;
   font-weight: bold;

   &:hover {
      color: white;
      border-color: red;
      border-radius: 7px;
      background-color: red;
      box-shadow: none;
      font-weight: normal;
      cursor: pointer;
   };
`

const FavButton = styled.button `
   margin-top: 7px;
   background-color: Transparent;
   background-repeat: no-repeat;
   border: none;

   &:hover {
      opacity: 50%;
      border: none;
      cursor: pointer;
   };
`

const TextName = styled.p `
   margin: 5px;
   color: black;

   &:not(.active) {
      text-decoration: none;
    }
   &.active {
      font-weight: bold;
      color: blue;
    }
`

const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   font-weight: bold;
`

const Text = styled.p `
   margin: 5px;
`


export function Card ( { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavourites, handleFavCharStatus } ) {


   const [isFav,setIsFav] = useState(false)
   
   
   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]); // shall include id?
   
   
      const handleFavourite = () => {
         if (isFav) {
            setIsFav(false);
            removeFav(id)
         } else { /* Changed the conditional */
            setIsFav(true);
            addFav({ id, name, status, species, gender, origin: origin.name, image }) // addFav can't pass propperly the function onClose to each card.
         } // origin -> origin: origin.name
      }
  
      const handleStatus = () => {
         if (status === 'Alive') return true
         else if (status === 'Dead') return false
      }


   return (
      <CardBox handleCharStatus = {handleStatus()} handleFavCharStatus = {handleFavCharStatus}>

         <CloseButton onClick = {() => {onClose(id)}}>x</CloseButton>

         <CardBoxImg src = {image} alt = {`picture of ${name}`} />

         <FavButton onClick = {handleFavourite}>{isFav ? '❤️' : '🤍'}</FavButton>

         <StyledNavLink to = {`/detail/${id}`}> {/*It's changing the style of the affected element (Text) */}
            <TextName>{name}</TextName>
         </StyledNavLink>

         <Text>{species}</Text>
         <Text>{gender}</Text>
         
      </CardBox>
   );
}


// this creates new props (addFav and removeFav) which are functions dispatch actions.
// dispatches action creators.

const mapDispatchToProps = (dispatch) => {   
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

// has access to the global redux state because of connect().

const mapStateToProps = (state) => {
   return {
      myFavourites: state.myFavourites
   }
}

// connects the dispatched actions with the component who needs it, making it a prop of that.

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)