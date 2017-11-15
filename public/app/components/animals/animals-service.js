function AnimalsService() {
    var baseUrl = 'http://localhost:3000/api/animals'

    // WHATS PRIVATE?
    // DUMMY DATA
    var animals = []

    // GET THE DATA FROM THE SERVER WHEN THE APPLICATION STARTS
    // ALSO NEED TO GET THE DATA ANY TIME I CHANGE THE DATA

    var engines = [
        { id: 1, fuel: 'Gas', cylinders: 4 },
        { id: 2, fuel: 'Diesel', cylinders: 4 },
        { id: 3, fuel: 'Gas', cylinders: 6 },
        { id: 4, fuel: 'Gas', cylinders: 8 },
        { id: 5, fuel: 'Gas', cylinders: 10 },
        { id: 6, fuel: 'Diesel', cylinders: 12 },
    ]
    function Animal(config) {
        this.title = config.title.value
        this.species = config.species.value
        this.breed = config.breed.value
        this.sex = config.sex.value
        this.age = config.age.value
        this.color = config.color.value
        this.price = config.price.value
        this.ailments = config.ailments.value
        this.description = config.description.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.img = config.img.value
    }

    function logError(err) {
        console.error(err)
    }

    // PUBLIC?

    this.getAnimals = function getAnimals(cb) {
        if (!cb || typeof cb != 'function') { return console.error('error: I need a callback to run') }
        // FIRST TASK IS TO REQUEST THE DATA FROM THE SERVER (ASYNC)
        // THE DATA FROM THE SERVER
        // GIVE THE CONTROLLER WHAT IS WANTS
        $.get(baseUrl)
            .then(res => {
                // SECOND TASK IS TO UPDATE THE LOCAL ANIMALS ARRAY WITH
                animals = res
                cb(animals)
            })
            .fail(logError)
    }

    // NOT CURRENTY BEING USED?
    this.getAnimal = function getAnimal(id) {
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if (id == animal.id) {
                return animal
            }
        }
    }

    this.addAnimal = function addAnimal(form, getAnimals) {
        if (!form || !getAnimals || typeof getAnimals != 'function') { return console.error('Unable to add animal', 'bad parameters', form, getAnimals) }
        var newAnimal = new Animal(form)
        $.post(baseUrl, newAnimal)
            .then(getAnimals)
            .fail(logError)
    }

    this.removeAnimal = function removeAnimal(id, getAnimals) {
        $.ajax({
            url: baseUrl + '/' + id,
            method: 'DELETE'
        })
            .then(getAnimals)
            .fail(logError)
    }

}