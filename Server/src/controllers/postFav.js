const { Favourite } = require('../DB_connection')


const postFav = async (req, res) => {

    try {
        
        const { id, name, origin, status, image, species, gender } = req.body

        if (!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send('Missing information')

        await Favourite.findOrCreate({
            where: {
                id, // id: id, name: name...
                name,
                origin,
                status,
                image,
                species,
                gender
            }
        })

        const allFavourites = await Favourite.findAll()

            return res.status(200).json(allFavourites)

    } catch (error) {
        
            return res.status(500).json({error: error.message})   
    }
}

module.exports = postFav