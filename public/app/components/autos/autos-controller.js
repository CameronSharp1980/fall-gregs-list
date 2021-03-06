function AutosController() {
  var autosService = new AutosService()


  // Buttons
  // Add New Auto
  // Delete Auto
  // Report Flag
  // View More
  // Filter / Search
  var autosElem = document.getElementById('autos-list')
  var autosFormElem = document.getElementById('add-auto-form')
  var showButtonAuto = document.getElementById('show-button-auto')

  function getAutos() {
    autosService.getAutos(drawAutos)
  }

  function drawAutos(autos) {

    // WHERE ARE ALL THE AUTOS?

    var template = ''
    for (var i = 0; i < autos.length; i++) {
      var auto = autos[i];
      template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.autosCtrl.removeAuto('${auto._id}')"></i>
                        <h3>${auto.title}</h3>
                        <h6>${auto.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${auto.img}" class="img-responsive">
                        <h4>${auto.year} - ${auto.make} ${auto.model}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>$ ${auto.price}</h5>
                    </div>
                </div>
            </div>
            `
    }
    autosElem.innerHTML = template
  }

  this.addAuto = function addAuto(event) {
    event.preventDefault()
    var form = event.target
    autosService.addAuto(form, getAutos)
    autosFormElem.classList.toggle('hidden', true)
  }
  var formstate = false

  this.showAddAutoForm = function showAddAutoForm() {
    if (formstate) {
      showButtonAuto.innerText = 'Add Listing'
      showButtonAuto.className = 'btn btn-info'
      autosFormElem.classList.add('hidden')
      formstate = false
    } else {
      showButtonAuto.innerText = 'Cancel'
      showButtonAuto.className = 'btn btn-danger'
      autosFormElem.classList.remove('hidden')
      formstate = true
    }
  }

  this.removeAuto = function removeAuto(id) {
    autosService.removeAuto(id, getAutos)
  }

  getAutos()

}