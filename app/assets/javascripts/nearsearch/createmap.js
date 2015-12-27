$(document).ready(function() {
  var map
  var startlat = 0
  var startlong = 0
  initMap();

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
    });
  }

  function displayRoute() {
    console.log(startlat)
    var start = new google.maps.LatLng(startlat, startlong);
    var end = new google.maps.LatLng($('#map').data('latitude'), $('#map').data('longitude'));

    var directionsDisplay = new google.maps.DirectionsRenderer();
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

  navigator.geolocation.getCurrentPosition(function (position){
  // initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  // map.setCenter(initialLocation)
  startlat = position.coords.latitude
  startlong = position.coords.longitude
  displayRoute();
  });

});
