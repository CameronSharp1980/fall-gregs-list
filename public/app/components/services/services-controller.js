function ServicesController() {
    var servicesService = new ServicesService()

    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var servicesElem = document.getElementById('services-list')
    var servicesFormElem = document.getElementById('add-service-form')
    var showButtonService = document.getElementById('show-button-service')
    function drawServices() {
        // WHERE ARE ALL THE SERVICES?
        var services = servicesService.getServices()
        var template = ''
        for (var i = 0; i < services.length; i++) {
            var service = services[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${service.title}</h3>
                        <h6>${service.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <h4>${service.description}</h4>
                    </div>
                    <div class="panel-footer">
                        <h4>${service.price}</h4>
                    </div>
                </div>
            </div>            
            `
        }
        servicesElem.innerHTML = template
    }

    this.addService = function addService(event) {
        event.preventDefault()
        var form = event.target
        servicesService.addService(form)
        servicesFormElem.classList.toggle('hidden', true)
        drawServices()
    }
    var formstate = false

    this.showAddServiceForm = function showAddServiceForm() {
        if (formstate) {
            showButtonService.innerText = 'Add Listing'
            showButtonService.className = 'btn btn-info'
            servicesFormElem.classList.add('hidden')
            formstate = false
        } else {
            showButtonService.innerText = 'Cancel'
            showButtonService.className = 'btn btn-danger'
            servicesFormElem.classList.remove('hidden')
            formstate = true
        }
    }

    drawServices()
}