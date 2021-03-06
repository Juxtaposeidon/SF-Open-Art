$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function (position){
    findNearEvent(position)
  });
  function findNearEvent(location){
    var position = {
      "lat" : location.coords.latitude,
      "long" : location.coords.longitude
    }
    $.ajax({
      data: position,
      method: "GET",
      url: 'nearbysearch/load'
    })
    .done(function(result){
      $('#content').html(result['partial'])
    })
  }
});
