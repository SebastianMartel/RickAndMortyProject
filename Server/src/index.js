const http = require("http")
const data = require('./utils/data')

const PORT = 3001

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(-1)
        const characterFound = data.find((char) => char.id === -id)

        return res.writeHead(200, {'Content-type' : 'application/json'})
        .end(JSON.stringify(characterFound))
    }
})
.listen(PORT) //works with '0.0.0.0' instead of 'localhost'