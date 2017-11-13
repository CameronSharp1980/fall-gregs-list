var express = require('express')
var bp = require('body-parser')
var server = express()
var port = 3000

// SERVES THE DEFAULT STATIC FILES
// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

var autos = [{
    id: 'asdfkljsdafdsaflkj239023u9402u',
    make: 'Honda',
    model: 'Accord',
    year: 1987,
    color: 'Burgandy',
    price: 1800,
    mileage: 323200,
    condition: 'Like New',
    engineId: '3', //GOOD QUESTION
    description: 'Runs great with gas',
    location: 'Boise',
    contact: 'testcar@cars.auto',
    img: '//loremflickr.com/200/200/car',
    title: 'Your New Car'
}]

var animals = [{
    id: 'asdfkljsdafdsaflkj239023u9402u',
    species: 'Dog',
    breed: 'Doberman',
    sex: 'male',
    age: 3,
    color: 'black',
    price: 500,
    ailments: 'Dog Breath',
    engineId: '3', //GOOD QUESTION
    description: 'Friendly, goot with kids',
    location: 'Boise',
    contact: 'testanimal@animals.animal',
    img: '//loremflickr.com/200/200/dog',
    title: 'Your New Dog'
}]

// GETTERS AND SETTERS FOR OUR DATA

// ANIMALS GET/SET

server.get('/api/animals', (req, res, next) => {
    res.send(animals)
})

server.post('/api/animals', (req, res, next) => {
    animals.push(req.body)
    res.send({ message: 'It worked, you just created a new animal listing!' })
})

server.delete('/api/animals/:index', (req, res, next) => {
    if (animals[req.params.index]) {
        animals.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the animal listing' })
    } else {
        res.status(400).send({ error: 'Bad animal index provided' })
    }
})

// AUTOS GET/SET
server.get('/api/autos', (req, res, next) => {
    res.send(autos)
})

server.post('/api/autos', (req, res, next) => {
    autos.push(req.body)
    res.send({ message: 'It worked, you just created a new auto listing!' })
})

server.delete('/api/autos/:index', (req, res, next) => {
    if (autos[req.params.index]) {
        autos.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the auto listing' })
    } else {
        res.status(400).send({ error: 'Bad auto index provided' })
    }
})

// PROPERTIES GET/SET

server.get('/api/properties', (req, res, next) => {
    res.send(properties)
})

server.post('/api/properties', (req, res, next) => {
    properties.push(req.body)
    res.send({ message: 'It worked, you just created a new property listing!' })
})

server.delete('/api/properties/:index', (req, res, next) => {
    if (properties[req.params.index]) {
        properties.splice(req.params.index, 1)
        res.send({ message: 'Successfully removed the property listing' })
    } else {
        res.status(400).send({ error: 'Bad property index provided' })
    }
})


// LISTEN
server.listen(port, () => { console.log("Server listening on port: ", port) })