const { User } = require("../DB_connection.js");


const login = async (req, res) => {

    try {
        const { email, password } = req.query;
    
        if (!email || !password) {
          return res.status(400).send('Missing credentials');
        }
    
        const user = await User.findOne({
          where: {
            email
          },
        });
    
        if (!user) {
          return res.status(404).send('User not found');
        }
    
        return user.password === password
          ? res.status(200).json({ access: true })
          : res.status(403).send('Invalid password');
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    
}


module.exports = login



// const users = require('../utils/users')


// const login = (req, res) => {

//     const { email, password } = req.query

//     const userFound = users.find((user) => user.email === email && user.password === password)

//     if (userFound) return res.status(200).json({access: true})
    
//     else return res.status(200).json({access: false})

// };

// module.exports = {
//     login
// }