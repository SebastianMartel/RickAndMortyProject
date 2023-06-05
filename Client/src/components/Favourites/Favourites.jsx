import { useState } from "react"
import { connect, useDispatch } from "react-redux"

import { filterCards, orderCards } from "../../Redux/actions"

import styled from "styled-components"
import Card from "../Card/Card"


const FilterDiv = styled.div `
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    margin: 0 auto;
    padding: 15px 0;
    width: 23%;
    background-image: linear-gradient(to left, #DA8787, #E1B07E, #434469, #01161E);
    border-radius: 50px
`

const FavCardBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 1.2rem;
`

const StyledSelect = styled.select `
    padding: 5px;
    appareance: none;
    outline: none;
    background-color: #0D1F2D;
    color: white;
    font-size: 15px;
    font-family: consolas;
    border: none;
    box-shadow: 2px 2px white
`

const Options = styled.option `
    font-size: 15px
`


const Favourites = ( { myFavourites, onClose } ) => {


    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()


        const handleOrder = (event) => {
            dispatch(orderCards(event.target.value))
            setAux(!aux) 
        }

        const handleFilter = (event) => {
            dispatch(filterCards(event.target.value))
        }

        const handleStatus = (status) => {
            if (status === 'Alive') return true
            else if (status === 'Dead') return false
        }
  

    return (
        <>
            <FilterDiv>
                <StyledSelect onChange = {handleOrder}>
                    <Options value = 'A'>Ascendente</Options>
                    <Options value = 'D'>Descendente</Options>
                </StyledSelect>
                <StyledSelect onChange = {handleFilter}>
                    <Options value = 'All'>Show all</Options>
                    <Options value = 'Male'>Male</Options>
                    <Options value = 'Female'>Female</Options>
                    <Options value = 'Genderless'>Genderless</Options>
                    <Options value = 'unknown'>Unknown</Options>
                </StyledSelect>
            </FilterDiv>

            <FavCardBox>
            {
                myFavourites?.map(({ id, name, origin, status, species, gender, image }) => {
                    const characterStatus = handleStatus(status)
// added origin in the map and status in the render
                    return (
                        <>
                            <Card
                                key = {id}
                                id = {id}
                                name = {name}
                                origin = {origin}
                                status = {status}
                                image = {image}
                                species = {species}
                                gender = {gender}
                                onClose = {onClose}
                                handleFavCharStatus = {characterStatus}
                            />
                            <p>this is : {typeof(onClose)}</p>
                        </>
                    )
                })
            }
            </FavCardBox>
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