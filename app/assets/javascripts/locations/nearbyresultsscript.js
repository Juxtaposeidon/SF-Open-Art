$(document).ready(function() {
  var map = new google.maps.Map(document.getElementById('nearmap'), {
    zoom: 16
  });
  var startlat;
  var startlong;
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
    var start = new google.maps.LatLng(startlat, startlong);
    directionsDisplay.setMap(map);
    var request = {
      origin : start,
      destination : end,
      travelMode : google.maps.TravelMode.WALKING
    };
    changeMarkerPosition(destmarker, end)
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
      }
    });
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    var homemarker = new google.maps.Marker({
      map: map,
      label: "!"
    });
    startlat = position.coords.latitude
    startlong = position.coords.longitude
    initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    changeMarkerPosition(homemarker, initialLocation)
    map.setCenter(initialLocation)
  });

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