function AnimalsService() {
    // WHATS PRIVATE?
    // DUMMY DATA
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

    var engines = [
        { id: 1, fuel: 'Gas', cylinders: 4 },
        { id: 2, fuel: 'Diesel', cylinders: 4 },
        { id: 3, fuel: 'Gas', cylinders: 6 },
        { id: 4, fuel: 'Gas', cylinders: 8 },
        { id: 5, fuel: 'Gas', cylinders: 10 },
        { id: 6, fuel: 'Diesel', cylinders: 12 },
    ]
    var id = 0;
    function Animal(config){
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
        this.id = id++
    }

    // PUBLIC?

    this.getAnimals = function getAnimals(){
        return animals
    }
    
    this.getAnimal = function getAnimal(id){
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if(id == animal.id){
                return animal
            }
        }
    }

    this.addAnimal = function addAnimal(form){
        var newAnimal = new Animal(form)
        animals.unshift(newAnimal)
    }
}