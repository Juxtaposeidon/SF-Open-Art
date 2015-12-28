$(document).ready(function() {
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
    });
  }
  initMap();

  navigator.geolocation.getCurrentPosition(function (position) {
  initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  dropMarker(position.coords.latitude, position.coords.longitude, "!")
  map.setCenter(initialLocation)});

  function dropMarker(lati, longi, symbol){
    var marker = new google.maps.Marker({
    map: map,
    position: {lat: lati, lng: longi},
    label: symbol
    });
    return marker;
  }

  $(".locations").on("click", "a", function(event){
    event.preventDefault();
    var location = {
      "address" : $(this).next().next().next(".address").text()
    }
    $.ajax({
      url: 'shownearby/locate',
      method: "GET",
      data: location
    })
    .done(function(place){
      console.log(place)
    })
  })
});