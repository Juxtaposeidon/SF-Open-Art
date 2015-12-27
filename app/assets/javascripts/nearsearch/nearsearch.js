$(document).ready(function() {
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
    });
    return map;
  }

  var map = new initMap()
  navigator.geolocation.getCurrentPosition(function (position){
  initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  dropMarker(position.coords.latitude, position.coords.longitude, "!")
  map.setCenter(initialLocation)
  findNearEvent(position)
  });


  function dropMarker(lati, longi, symbol){
    var marker = new google.maps.Marker({
    map: map,
    position: {lat: lati, lng: longi},
    label: symbol
    });
  }

  function findNearEvent(location){
    var position = {
      "lat" : location.coords.latitude,
      "long" : location.coords.longitude
    }
    $.ajax({
        data: position,
        method: "GET",
        url: 'nearsearch/locate'
    })
  }

});
