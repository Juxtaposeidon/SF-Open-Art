$(document).ready(function() {
  var map = new google.maps.Map(document.getElementById('nearmap'), {
    zoom: 16
  });
  var initialLocation
  var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true
  });
  var destmarker = new google.maps.Marker({
    map: map
  });
  var infowindow = new google.maps.InfoWindow();

  function changeMarkerPosition(tag, place) {
    tag.setPosition(place);
  }

  function displayRoute(end) {
    directionsDisplay.setMap(map);
    var request = {
      origin : initialLocation,
      destination : end,
      travelMode : google.maps.TravelMode.WALKING
    };
    destmarker.setPosition(end)
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
      }
    });
  }
  function locationError(){
    alert("Please share your location to enable this feature.")
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    var homemarker = new google.maps.Marker({
      map: map,
      label: "!"
    });
    initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    homemarker.setPosition(initialLocation)
    map.setCenter(initialLocation)
  },
  locationError);

  $("#locationframe").on("click", ".address", function(event){
    $('p').removeClass("selected")
    $(this).parent().addClass("selected")
    infowindow.open(map,destmarker)
    infowindow.setContent('<i>' + $(this).data('name') + '</i>')
    directionsDisplay.set('directions', null)
    displayRoute(new google.maps.LatLng($(this).data('lat'), $(this).data('long')));
    scroll(0,0)
  })

});
