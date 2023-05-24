import Card from "../Card/Card"
import { useState } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../Redux/actions"
import styled from "styled-components"


const FilterDiv = styled.div `
    display: flex;
    justify-content: center;

    margin: 0 auto;
    padding: 15px 0;
    width: 20%;
    background-image: linear-gradient(to left, #DA8787, #E1B07E, #434469, #01161E);
    border-radius: 50px
`

const FavCardBox = styled.div `
    margin-top: 1.2rem;
`

const Favourites = ({myFavourites}) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

        const handleOrder = (event) => {
            dispatch(orderCards(event.target.value))
            setAux(true) 
        }

        const handleFilter = (event) => {
            dispatch(filterCards(event.target.value))
        }

        const handleStatus = (status) => {
            if(status === 'Alive') return true
            else if(status === 'Dead') return false
        }
  
    return (
        <>
            <FilterDiv>
                <select onChange = {handleOrder}>
                    <option value = 'A'>Ascendente</option>
                    <option value = 'D'>Descendente</option>
                </select>
                <select onChange = {handleFilter}>
                    <option value = 'Male'>Male</option>
                    <option value = 'Female'>Female</option>
                    <option value = 'Genderless'>Genderless</option>
                    <option value = 'unknown'>unknown</option>
                </select>
            </FilterDiv>
        {
            myFavourites?.map(({id, name, status, species, gender, image, onClose}, idx) => {
                
                const characterStatus = handleStatus(status)

                return (    
                    <FavCardBox>
                        <Card
                            key = {idx}
                            id = {id}
                            name = {name}
                            species = {species}
                            gender = {gender}
                            image = {image}
                            onClose = {onClose}
                            handleFavCharStatus = {characterStatus}
                        />
                    </FavCardBox>
                )
            })
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavourites: state.myFavourites
    }
} 

export default connect(
    mapStateToProps,
    null
)(Favourites)