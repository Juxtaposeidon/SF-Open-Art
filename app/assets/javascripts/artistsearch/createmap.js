$(document).ready(function() {
  var map
  var startlat = 0
  var startlong = 0

  function initMap() {
    map = new google.maps.Map(document.getElementById('artistmap'), {
      zoom: 13
    });
  }

  initMap();
  map.setCenter(new google.maps.LatLng(37.7833, -122.4167));
})