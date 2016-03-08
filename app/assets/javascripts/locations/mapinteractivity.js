$(document).ready(function() {
  var lastmarker
  var map = new google.maps.Map(document.getElementById('fullmap'), {
    zoom: 13
  });
  map.setCenter(new google.maps.LatLng(37.7833, -122.4167));

  placeMarker = function(location, id){
    var marker = new google.maps.Marker({
      map: map,
      position: location,
      customInfo: id,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    google.maps.event.addListener(marker, 'click', function(){
      $.ajax({
        type: 'GET',
        url: '/markers/show',
        data: {
          markerid: marker.customInfo
        }
      })
      .done(function(data){
        if(lastmarker){
          lastmarker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        }
        $('#fullmapdesc').html('<h5><i>' + data.title + '</i> by ' + data.artist + '<br>Address: ' + data.address + '</h5>')
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
        lastmarker = marker
      })
    })
  }

  placeAllMarkers= function(){
    $.ajax({
      url: '/markers'
    })
    .done(function(data){
      data.forEach(function(item){
        var point = new google.maps.LatLng(item.latitude, item.longitude);
        placeMarker(point, item.id)
      })
    })
  }

  placeAllMarkers();

})