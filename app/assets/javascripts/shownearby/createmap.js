$(document).ready(function() {
  var map;
  var startlat;
  var startlong;
  var directionsDisplay = new google.maps.DirectionsRenderer();


  function displayRoute(end) {
    var start = new google.maps.LatLng(startlat, startlong);
    directionsDisplay.setMap(map);
    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
  }
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
    });
  }

  initMap();

  navigator.geolocation.getCurrentPosition(function (position) {
  startlat = position.coords.latitude
  startlong = position.coords.longitude
  initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  map.setCenter(initialLocation)});

  function dropMarker(lati, longi, symbol){
    var marker = new google.maps.Marker({
    map: map,
    position: {lat: lati, lng: longi},
    label: symbol
    });
    return marker;
  }

  $("#locations").on("click", ".address", function(event){
    event.preventDefault();
    var location = {
      "location" : $(this).data()["placeid"]
    }
    $.ajax({
      url: 'shownearby/locate',
      method: "GET",
      data: location
    })
    .done(function(place){
      directionsDisplay.set('directions', null)
      displayRoute(new google.maps.LatLng(place["lat"], place["long"]))
    })
  })
  $("#locationframe").on("click", "#next", function(event){
    event.preventDefault();
    $.ajax({
      url: 'shownearby/nextresults',
      method: "GET",
    })
    .done(function(results){
      $('#locationframe').html(results["partial"])
    })
  });
});