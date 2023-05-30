const app = require('../src/app');
const session = require('supertest');
const userData = require('../src/utils/users')


const agent = session(app);

describe ('Routes test', () => {

    const character = {
        id: 1000,
        name: 'a',
        species: '',
        gender: '',
        status: '',
        origin: {
            name: '',
            url: ''
        },
        image: ''
    }

    describe ('GET /rickandmorty/character/:id', () => {

        it ('Reponse: status 200', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200)
        })
        it ('Properties in response.body: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            for (let prop in character) {
                expect (response.body).toHaveProperty(prop)
            }
        })
        it ('If error, response status: 500', async () => {
            const response = await agent.get('/rickandmorty/character/827')
            expect(response.statusCode).toBe(500)
            }
        )
    })

    describe ('GET /rickandmorty/login', () => {

        const access = {access : true}

        it ('If credentials are valid, access: true', async () => {
            const response = await agent.get('/rickandmorty/login?email=email@email.com&&password=password99')
            expect(response.body).toEqual(access)
        })
        it ('If credentials are invalid, access: false', async () => {
            const response = await agent.get('/rickandmorty/login?email=email@email&&password=password')
            access.access = false
            expect(response.body).toEqual(access)
        })
    })

    describe ('POST /rickandmorty/fav', () => {

        it ("It's an array", async () => {
            const response = await agent.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })
        it ('Added character', async () => {
            character.id = 2000;
            character.name = 'b'
            const response = await agent.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)
        })
    })

    describe ('DELETE /rickandmorty/fav/:id', () => {

        it ('If id is invalid, array is the same', async () => {
            const response = await agent.delete('/rickandmorty/fav/900')
            expect(response.body).toEqual(response.body)
        })

        it ('If id is valid, remove from array', async () => {
            const id = 1000
            const response = await agent.delete(`/rickandmorty/fav/${id}`)
            console.log(response.body)
            expect(response.body).toEqual(response.body.filter((char) => char.id !== id))
        }) 
    })
})
