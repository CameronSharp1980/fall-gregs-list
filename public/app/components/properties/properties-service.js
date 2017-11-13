function PropertiesService() {
    // WHATS PRIVATE?
    // DUMMY DATA
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

    var engines = [
        { id: 1, fuel: 'Gas', cylinders: 4 },
        { id: 2, fuel: 'Diesel', cylinders: 4 },
        { id: 3, fuel: 'Gas', cylinders: 6 },
        { id: 4, fuel: 'Gas', cylinders: 8 },
        { id: 5, fuel: 'Gas', cylinders: 10 },
        { id: 6, fuel: 'Diesel', cylinders: 12 },
    ]
    var id = 0;
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
        this.id = id++
    }

    // PUBLIC?

    this.getProperties = function getProperties() {
        return properties
    }

    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return property
            }
        }
    }

    this.addProperty = function addProperty(form) {
        var newProperty = new Property(form)
        properties.unshift(newProperty)
    }
}