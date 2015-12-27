$(document).ready(function() {
  var map = new initMap()
  var startlat = 0
  var startlong = 0

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
    });
    return map;
  }
  navigator.geolocation.getCurrentPosition(function (position){
  // initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  // map.setCenter(initialLocation)
  startlat = position.coords.latitude
  startlong = position.coords.longitude
  displayRoute();
  });

  function displayRoute() {
    console.log(startlat)
    var start = new google.maps.LatLng(startlat, startlong);
    var end = new google.maps.LatLng($('#map').data('latitude'), $('#map').data('longitude'));

    var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.
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

});
