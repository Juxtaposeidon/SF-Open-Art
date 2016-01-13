$(document).ready(function() {
  var map = new google.maps.Map(document.getElementById('nearmap'), {
    zoom: 16
  });
  var startlat;
  var startlong;
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var marker = new google.maps.Marker({
    map: map,
    label: "A"
  });

  function changeMarkerPosition(tag, lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    tag.setPosition(latlng);
  }
  function displayRoute(end) {
    var start = new google.maps.LatLng(startlat, startlong);
    directionsDisplay.setMap(map);
    var request = {
      origin : start,
      destination : end,
      travelMode : google.maps.TravelMode.WALKING
    };
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
      }
    });
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    startlat = position.coords.latitude
    startlong = position.coords.longitude
    initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    changeMarkerPosition(marker, position.coords.latitude, position.coords.longitude)
    map.setCenter(initialLocation)
  });

  $("#locationframe").on("click", ".address", function(event){
    event.preventDefault();
    $('p').removeClass("selected")
    $(this).parent().addClass("selected")
    marker.setMap(null)
    directionsDisplay.set('directions', null)
    displayRoute(new google.maps.LatLng($(this).data('lat'), $(this).data('long')));
    scroll(0,0)
  })

  $("#locationframe").on("click", ".results", function(event){
    event.preventDefault();
    var direction = {
      pagedir: $(this).text()
    }
    $.ajax({
      url: 'nearbysearch/show',
      method: "GET",
      data: direction
    })
    .done(function(results){
      $('#locationframe').html(results["partial"])
    })
  });

});