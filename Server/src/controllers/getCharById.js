const axios = require('axios')


const URL = 'https://rickandmortyapi.com/api/character/'


const getCharById = (req, res) => {

    const { id } = req.params

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
        if(name) {
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found')
    })
    .catch((error) => {
        return res.status(500).send(error.message)
    })
}

module.exports = getCharById