function AnimalsController() {
    var animalsService = new AnimalsService()


    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var animalsElem = document.getElementById('animals-list')
    var animalsFormElem = document.getElementById('add-animal-form')
    var showButtonAnimal = document.getElementById('show-button-animal')
    function drawAnimals() {
        // WHERE ARE ALL THE ANIMALS?
        var animals = animalsService.getAnimals()
        var template = ''
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${animal.title}</h3>
                        <h6>${animal.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${animal.img}" class="img-responsive">
                        <h4>${animal.age} - ${animal.species} ${animal.breed}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>$ ${animal.price}</h5>
                    </div>
                </div>
            </div>
            `
        }
        animalsElem.innerHTML = template
    }

    this.addAnimal = function addAnimal(event) {
        event.preventDefault()
        var form = event.target
        animalsService.addAnimal(form)
        animalsFormElem.classList.toggle('hidden', true)
        drawAnimals()
    }
    var formstate = false

    this.showAddAnimalForm = function showAddAnimalForm() {
        if (formstate) {
            showButtonAnimal.innerText = 'Add Animal'
            showButtonAnimal.className = 'btn btn-info'
            animalsFormElem.classList.add('hidden')
            formstate = false
        } else {
            showButtonAnimal.innerText = 'Cancel'
            showButtonAnimal.className = 'btn btn-danger'
            animalsFormElem.classList.remove('hidden')
            formstate = true
        }
    }

    drawAnimals()
}