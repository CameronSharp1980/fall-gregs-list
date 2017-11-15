var Services = require('../models/service')
var router = require('express').Router()
// WHAT IS SERVICES? RESOURCE
// WHERE IS EXPRESS
router.get('/api/services', (req, res, next) => {
    // FIRST JOB is to go get the services from the db
    Services.find({})
        .then(services => res.send(services))
        .catch(err => res.status(400).send(err))
})

router.get('/api/services/:id', (req, res, next) => {
    Services.findById(req.params.id)
        .then(service => res.send(service))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW SERVICE
router.post('/api/services', (req, res, next) => {
    Services.create(req.body)
        .then(service => res.send(service))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/services/:id', (req, res, next) => {
    Services.findByIdAndRemove(req.params.id)
        .then((service) => {
            res.send({ message: 'Successfully removed service at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router