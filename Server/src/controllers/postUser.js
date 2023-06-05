const { User } = require('../DB_connection')


const postUser = async (req, res) => {
    
    try {

        const { email, password } = req.body
        
        if (!email || !password) return res.status(400).send('Missing credentials')

        const user = await User.findOrCreate({
            where: {
                email,
                password
            }
        })

            return res.status(200).json(user) // first elements is the user object and the second represents whether a new user has been created or not
    }

    catch (error) {

            return res.status(500).json({error: error.message})
    }
}

module.exports = postUser