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



    $(".card").show();
    $(".location").append("<li>" + newPlace.location + "</li>");
    // $(".addDetails").append("<ul>" + Object.keys() + "</ul>")
    
    // $(".addDetails").append("<li>" + "Landmarks: " + inputLandmarks + "</li>" + "<li>" + "Time of Year: "+ inputTime + "</li>" + "<li>" + "Notes: " + inputNotes + "</li>");
    $(".card").click(function() {
      $(".addDetails").show();
    })
  })
})


// $(document).ready(function(){
//   $("#submit").submit(function(event) {
//     event.preventDefault();
//     const input = $("#input").val();
//     const output = [];
//     mrRobo(input).forEach(function(number) {
//       output.push(number + " ");
//       $("#output").append("<li>" + output.toString().split(",").pop() + "</li>");
//     })
//     $("#submit").hide();
//     $(".hidden").toggleClass();
//     $("#refresh").show();
//     $("#userInput").append(input);
//   })
// })