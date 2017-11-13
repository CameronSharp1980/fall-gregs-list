function AutosService() {
    var baseUrl = 'http://localhost:3000/api/autos'

    // WHATS PRIVATE?
    // DUMMY DATA
    var autos = []

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
    var id = 0;
    function Auto(config) {
        this.title = config.title.value
        this.make = config.make.value
        this.model = config.model.value
        this.year = config.year.value
        this.price = config.price.value
        this.mileage = config.mileage.value
        this.color = config.color.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.condition = config.condition.value
        this.description = config.description.value
        this.img = config.img.value
        this.id = id++
    }

    function logError(err) {
        console.error(err)
    }

    // PUBLIC?

    this.getAutos = function getAutos(cb) {
        if (!cb || typeof cb != 'function') { return console.error('error: I need a callback to run') }
        // FIRST TASK IS TO REQUEST THE DATA FROM THE SERVER (ASYNC)
        // THE DATA FROM THE SERVER
        // GIVE THE CONTROLLER WHAT IS WANTS
        $.get(baseUrl)
            .then(res => {
                // SECOND TASK IS TO UPDATE THE LOCAL AUTOS ARRAY WITH
                autos = res
                cb(autos)
            })
            .fail(logError)
    }

    this.getAuto = function getAuto(id) {
        for (var i = 0; i < autos.length; i++) {
            var auto = autos[i];
            if (id == auto.id) {
                return auto
            }
        }
    }

    this.addAuto = function addAuto(form, getAutos) {
        if (!form || !getAutos || typeof getAutos != 'function') { return console.error('Unable to add auto', 'bad parameters', form, getAutos) }
        var newAuto = new Auto(form)
        $.post(baseUrl, newAuto)
            .then(getAutos)
            .fail(logError)
    }

    this.removeAuto = function removeAuto(index, getAutos) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getAutos)
            .fail(logError)
    }

}