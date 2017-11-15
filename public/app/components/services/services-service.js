function ServicesService() {
    var baseUrl = 'http://localhost:3000/api/services'

    // WHATS PRIVATE?
    // DUMMY DATA
    // SHOULD GET REPLACED WITH WHATS ON THE SERVER
    var services = []

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

    function Service(config) {
        this.title = config.title.value
        this.price = config.price.value
        this.description = config.description.value
        this.location = config.location.value
        this.contact = config.contact.value
    }

    function logError(err) {
        console.error(err)
    }

    // PUBLIC?

    this.getServices = function getServices(cb) {
        if (!cb || typeof cb != 'function') { return console.error('error: I need a callback to run') }
        // FIRST TASK IS TO REQUEST THE DATA FROM THE SERVER (ASYNC)
        // THE DATA FROM THE SERVER
        // GIVE THE CONTROLLER WHAT IS WANTS
        $.get(baseUrl)
            .then(res => {
                // SECOND TASK IS TO UPDATE THE LOCAL SERVICES ARRAY WITH
                services = res
                cb(services)
            })
            .fail(logError)
    }

    this.getService = function getService(id) {
        for (var i = 0; i < services.length; i++) {
            var service = services[i];
            if (id == service.id) {
                return service
            }
        }
    }

    this.addService = function addService(form, getServices) {
        if (!form || !getServices || typeof getServices != 'function') { return console.error('Unable to add service', 'bad parameters', form, getServices) }
        var newService = new Service(form)
        $.post(baseUrl, newService)
            .then(getServices)
            .fail(logError)
    }

    this.removeService = function removeService(id, getServices) {
        $.ajax({
            url: baseUrl + '/' + id,
            method: 'DELETE'
        })
            .then(getServices)
            .fail(logError)
    }

}