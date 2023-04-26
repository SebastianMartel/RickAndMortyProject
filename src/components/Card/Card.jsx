import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CardBox = styled.div `
   display: flex;
   flex-direction: column;
   max-width: 250px;
   margin: 0 auto 10px;
   padding: 10px 10px;
   border-radius: 7px;
   background-image: linear-gradient(to right bottom, #CBC0AD, #86A397);
   `

const CardBoxImg = styled.img `
   display: flex;
   max-width: 250px;
   align-items: center;
   object-fit: cover;
   border: 7px solid;
   border-radius: 13px;
   border-image-source: url('https://t4.ftcdn.net/jpg/04/61/52/17/360_F_461521748_EDK7HRYIMKKFMY5QrWz1lcDNaIBYw0s9.jpg');
   border-image-width: 10px;
   border-image-slice: 1
`

const CloseButton = styled.button `
   opacity: 0.5;
   margin-bottom: 10px;
   font-size: 1rem;
   align-self: flex-end;
   border-radius: 3px;

   &:hover {
      background-color: red;
      border-color: red;
      border-radius: 7px;
   };
`

const Text = styled.p `
   margin: 5px;
`

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <CardBox>
         <CloseButton onClick={() => {onClose(id)}}>x</CloseButton>
         <CardBoxImg src = {image} alt = {`picture of ${name}`} />
         <NavLink to = {`/detail/${id}`}> {/*It's changing the style of the affected element (Text) */}
            <Text>{name}</Text>
         </NavLink>
         <Text>{species}</Text>
         <Text>{gender}</Text>
      </CardBox>
   );
}