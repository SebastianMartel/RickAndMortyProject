import Card from "../Card/Card"
import { useState } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../Redux/actions"

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

    return (
        <>
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
        {
            myFavourites?.map(({id, name, species, gender, image, onClose}, idx) => {
                return (    
                    <>
                    <Card
                        key = {idx}
                        id = {id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        image = {image}
                        onClose = {onClose}
                    />
                    </>
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