function PropertiesController() {
  var propertiesService = new PropertiesService()


  // Buttons
  // Add New Property
  // Delete Property
  // Report Flag
  // View More
  // Filter / Search
  var propertiesElem = document.getElementById('properties-list')
  var propertiesFormElem = document.getElementById('add-property-form')
  var showButtonProperty = document.getElementById('show-button-property')

  function getProperties() {
    propertiesService.getProperties(drawProperties)
  }

  function drawProperties(properties) {

    // WHERE ARE ALL THE PROPERTIES?

    var template = ''
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      template += `
                <div class="col-md-3">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.propertiesCtrl.removeProperty('${property._id}')"></i>
                            <h3>${property.title}</h3>
                            <h6>${property.location}</h6>
                        </div>
                        <div class="panel-body text-center">
                            <img src="${property.img}" class="img-responsive">
                            <h4>${property.constructionDate} - ${property.zoning} ${property.squareFeet}</h4>
                        </div>
                        <div class="panel-footer">
                            <h5>$ ${property.price}</h5>
                        </div>
                    </div>
                </div>
                `
    }
    propertiesElem.innerHTML = template
  }

  this.addProperty = function addProperty(event) {
    event.preventDefault()
    var form = event.target
    propertiesService.addProperty(form, getProperties)
    propertiesFormElem.classList.toggle('hidden', true)
  }
  var formstate = false

  this.showAddPropertyForm = function showAddPropertyForm() {
    if (formstate) {
      showButtonProperty.innerText = 'Add Property'
      showButtonProperty.className = 'btn btn-info'
      propertiesFormElem.classList.add('hidden')
      formstate = false
    } else {
      showButtonProperty.innerText = 'Cancel'
      showButtonProperty.className = 'btn btn-danger'
      propertiesFormElem.classList.remove('hidden')
      formstate = true
    }
  }

  this.removeProperty = function removeProperty(id) {
    propertiesService.removeProperty(id, getProperties)
  }

  getProperties()
}