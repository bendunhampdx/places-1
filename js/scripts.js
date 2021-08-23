// Business logic for Places Ive Been

function PlacesIveBeen() {
  this.places = {};
  this.currentId = 0;
}

PlacesIveBeen.prototype.addPlace = function(places) {
  places.id = this.assignId();
  this.places[places.id] = places;
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesIveBeen.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
}

PlacesIveBeen.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
}

// Business logic for Places
function Places(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes; 
}

Places.prototype.destination = function() {
  return this.location + " " + this.timeOfYear;
}

// User Interface Logic



let placesIveBeen = new PlacesIveBeen();

$(document).ready(function(){
  $("#addPlace").submit(function(event){
    event.preventDefault();
   
    let inputLocation = $("#location").val();
    let inputLandmarks = $("#landmarks").val();
    let inputTime = $("#timeOfYear").val();
    let inputNotes = $("#notes").val();
    let newPlace = new Places(inputLocation, inputLandmarks, inputTime, inputNotes);
    placesIveBeen.addPlace(newPlace);

    for (i = 0; i < Object.keys(placesIveBeen).length - 1; i++) {
      let htmlOutput = "<div class='card'>" + "<ul id=" + newPlace.location + ">" + "<p>" + newPlace.location + "</p>" + "<li>" + newPlace.landmarks + "</li>" + "<li>" + newPlace.timeOfYear + "</li>" + "<li>" + newPlace.notes + "</li>" + "</ul>" + "</div>" ;
      $(".location").append(htmlOutput);
    }

    $(".card").show();
    $("ul").click(function() {
      $("li").toggle();
    })
  })
})

