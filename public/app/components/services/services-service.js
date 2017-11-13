function ServicesService() {

    // WHATS PRIVATE?
    // DUMMY DATA
    var services = [{
        id: 'jfdghdjbjhbajldjbhjhgal',
        title: "Dummy Service",
        price: 500,
        description: "Dummy Description (services)",
        location: "Some town (services)",
        contact: "me@services.net"
    }]

    var engines = [
        { id: 1, fuel: 'Gas', cylinders: 4 },
        { id: 2, fuel: 'Diesel', cylinders: 4 },
        { id: 3, fuel: 'Gas', cylinders: 6 },
        { id: 4, fuel: 'Gas', cylinders: 8 },
        { id: 5, fuel: 'Gas', cylinders: 10 },
        { id: 6, fuel: 'Diesel', cylinders: 12 },
    ]
    var id = 0;
    function Service(config) {
        this.title = config.title.value
        this.price = config.price.value
        this.description = config.description.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.id = id++
    }

    // PUBLIC?

    this.getServices = function getServices() {
        return services
    }

    this.getService = function getService(id) {
        for (var i = 0; i < services.length; i++) {
            var service = services[i];
            if (id == service.id) {
                return service
            }
        }
    }

    this.addService = function addService(form) {
        var newService = new Service(form)
        services.unshift(newService)
    }

}