const { Favourite } = require('../models/Favourite')


const deleteFav = async (req, res) => {
    
    try {
        
        const { id } = req.params

        const favToRemove = await Favourite.findByPk(id)

        await favToRemove.destroy();

        const allFavourites = await Favourite.findAll();

            return res.status(200).json(allFavourites);
        
    } catch (error) {
        
            return res.status(500).json({ error: error.message });
    }
}

// const deleteFav = async (req, res) => {

//     try {

//         const { id } = req.params

//         await Favourite.destroy({
//              where: {id: id}
//         })

//         const allFavourites = await Favourite.findAll()

//         return res.status(200).json(allFavourites)
        
//     } catch (error) {
//         return res.status(500).json({error: error.message})
//     }

// }


module.exports = deleteFav