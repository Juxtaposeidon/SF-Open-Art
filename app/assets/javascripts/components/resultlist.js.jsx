var ResultList = React.createClass({
  getInitialState: function(){
    return{
      nearbyspots: undefined,
      showprev: undefined,
      shownext: undefined,
      index: 1
    }
  },
  componentDidMount: function() {
    var react = this
    navigator.geolocation.getCurrentPosition(function (position){
    $.ajax({
        data: {'lat': position.coords.latitude, 'long': position.coords.longitude},
          url: '/locations',
          success: function(searchresults){
            this.setState({nearbyspots: searchresults["nearbyspots"], showprev: searchresults["prev"], shownext: searchresults["next"], })
        }.bind(react)
      })
    })
  },
  render: function(){
    if ( !this.state.nearbyspots ) {
      return <div>Please wait..</div>
    }
    var next = undefined
    var prev = undefined
    if (this.state.shownext){
      next = <a href="">Next</a>
    }
    if (this.state.showprev){
      Prev = <a href="">Prev</a>
    }
    var places = this.state.nearbyspots
    var locations = places.map(function(place){
      console.log(place.title)
      return <Result name={place.title}
      artist={place.artist}
      address={place.address}
      latitude={place.latitude}
      longitude={place.longitude}/>
    });
    return(
      <div id="locations">
      {locations}
      {prev}{next}
      </div>
    )
  }
})