var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')
var animalRoutes = require('./server-assets/routes/animal-routes')

var server = express()
var port = 3000
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)
server.use(animalRoutes)

var properties = [{
    id: 'asdfkljsdafdsaflkj239023u9402u',
    zoning: 'Industrial',
    squareFeet: 10000,
    constructionDate: 1987,
    color: 'Yellow',
    price: 180000,
    condition: 'Dilapidated',
    description: 'Fixer-upper',
    engineId: '3', //GOOD QUESTION
    location: 'TimBuckToo',
    contact: 'testproperty@properties.property',
    img: '//loremflickr.com/200/200/building',
    title: 'Your New Property'
}]

// GETTERS AND SETTERS FOR OUR DATA

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
server.listen(port, () => {
    console.log("Server listening on port: ", port)
})