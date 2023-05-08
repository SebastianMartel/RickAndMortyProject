import Card from "../Card/Card"
import { connect } from "react-redux"

const Favourites = ({myFavourites}) => {
    return (
        <>
        {
            myFavourites?.map(({id, name, species, gender, image, onClose}, idx) => {
                return (
                    <Card
                        key = {idx}
                        id = {id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        image = {image}
                        onClose = {onClose}
                    />
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