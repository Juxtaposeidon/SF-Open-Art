$(document).ready(function () {
  var map = new google.maps.Map(document.getElementById("resultmap"), { zoom: 13 });
  map.setCenter(new google.maps.LatLng(37.7833, -122.4167));
  var marker = new google.maps.Marker({ map: map });
  var infowindow = new google.maps.InfoWindow();
  function changeMarkerPosition(tag, lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    tag.setPosition(latlng);
  }
  $("#results").on("click", ".result", function (event) {
    changeMarkerPosition(marker, $(this).data("latitude"), $(this).data("longitude"))
    map.setCenter(new google.maps.LatLng($(this).data("latitude"), $(this).data("longitude")));
    infowindow.setContent("<i>"+ $(this).text() + "</i>: " + $(this).data("address"))
    infowindow.open(map,marker);
    scroll(0,0)
    map.setZoom(16)
  })
});