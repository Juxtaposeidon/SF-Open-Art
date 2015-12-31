$(document).ready(function() {
  var map
  initMap();
  map.setCenter(new google.maps.LatLng(37.7833, -122.4167));
  var startlat = 0
  var startlong = 0
  var marker = new google.maps.Marker({
    map: map,
  });
  function initMap() {
    map = new google.maps.Map(document.getElementById('artistmap'), {
      zoom: 13
    });
  }
  function changeMarkerPosition(tag, lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    tag.setPosition(latlng);
  }
  $('.artname').click(function(event){
    event.preventDefault();
    map.setZoom(16)
    changeMarkerPosition(marker, $(this).data('latitude'), $(this).data('longitude'))
    map.setCenter(new google.maps.LatLng($(this).data('latitude'), $(this).data('longitude')));
    var infowindow = new google.maps.InfoWindow({
      content:$(this).data('address')
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
    scroll(0,0)
  })
})