const http = require("http")
const { getChardById } = require ('./controllers/getCharById')

const PORT = 3001

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(-1)

        getChardById(res, +id) 
    }
})
.listen(PORT, 'localhost') //works with '0.0.0.0' instead of 'localhost'