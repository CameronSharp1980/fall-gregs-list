function PropertiesService() {
    var baseUrl = 'http://localhost:3000/api/properties'

    // WHATS PRIVATE?
    // DUMMY DATA
    var properties = []

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
    function Property(config) {
        this.title = config.title.value
        this.zoning = config.zoning.value
        this.squareFeet = config.squareFeet.value
        this.constructionDate = config.constructionDate.value
        this.color = config.color.value
        this.price = config.price.value
        this.condition = config.condition.value
        this.description = config.description.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.img = config.img.value
    }

    function logError(err) {
        console.error(err)
    }

    // PUBLIC?

    this.getProperties = function getProperties(cb) {
        if (!cb || typeof cb != 'function') { return console.error('error: I need a callback to run') }
        // FIRST TASK IS TO REQUEST THE DATA FROM THE SERVER (ASYNC)
        // THE DATA FROM THE SERVER
        // GIVE THE CONTROLLER WHAT IS WANTS
        $.get(baseUrl)
            .then(res => {
                // SECOND TASK IS TO UPDATE THE LOCAL PROPERTIES ARRAY WITH
                properties = res
                cb(properties)
            })
            .fail(logError)
    }

    // NOT CURRENTLY BEING USED?
    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return property
            }
        }
    }

    this.addProperty = function addProperty(form, getProperties) {
        if (!form || !getProperties || typeof getProperties != 'function') { return console.error('Unable to add property', 'bad parameters', form, getProperties) }
        var newProperty = new Property(form)
        $.post(baseUrl, newProperty)
            .then(getProperties)
            .fail(logError)
    }

    this.removeProperty = function removeProperty(id, getProperties) {
        $.ajax({
            url: baseUrl + '/' + id,
            method: 'DELETE'
        })
            .then(getProperties)
            .fail(logError)
    }

}