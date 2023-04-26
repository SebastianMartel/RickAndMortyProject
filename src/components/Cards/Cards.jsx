import Card from '../Card/Card';
import styled from 'styled-components';

const CardsContainer = styled.div `
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
`

export default function Cards({characters, onClose}) {
   return (
      <CardsContainer>
         {
         characters.map(({id, name, status, species, gender, origin, image}, index) => { // unique parameter with each character properties of the characters array.
            return (
               <Card // sort of redefining properties values. Since, in Card we take only Rick properties values.  Here, I take characters as parameter to access its properties.
                  // key is being asked.
                  key = {index}
                  id = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onClose={onClose}
               />
            )
         })
         }
      </CardsContainer>
   );
}

// if(status === 'alive'), text color = green 

















// OP2:
// characters.map((character) => {
//    return (
//    <Card 
//    id = {character.id}
//    name = {character.name}
//    status = {character.status}
//    species = {character.species}
//    gender = {character.gender}
//    origin = {character.origin.name}
//    image = {character.image}
//    />
   
//    )})