function ServicesController() {
    var servicesService = new ServicesService()


    // Buttons
    // Add New Service
    // Delete Service
    // Report Flag
    // View More
    // Filter / Search
    var servicesElem = document.getElementById('services-list')
    var servicesFormElem = document.getElementById('add-service-form')
    var showButtonService = document.getElementById('show-button-service')

    function getServices() {
        servicesService.getServices(drawServices)
    }

    function drawServices(services) {

        // WHERE ARE ALL THE SERVICES?

        var template = ''
        for (var i = 0; i < services.length; i++) {
            var service = services[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                    <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.servicesCtrl.removeService('${service._id}')"></i>
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
        servicesService.addService(form, getServices)
        servicesFormElem.classList.toggle('hidden', true)
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

    this.removeService = function removeService(id) {
        servicesService.removeService(id, getServices)
    }

    getServices()

}