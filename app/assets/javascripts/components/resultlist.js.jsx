var ResultList = React.createClass({
  getInitialState: function(){
    return{
      nearbyspots: undefined
    }
  },
  componentDidMount: function() {
    var react = this
    navigator.geolocation.getCurrentPosition(function (position){
      this.serverRequest = $.ajax({
        data: {'lat': position.coords.latitude, 'long': position.coords.longitude},
          url: '/locations',
          success: function(searchresults){
            this.setState({nearbyspots: searchresults["nearbyspots"]})

          }.bind(react)
      })
    })
  },
  render: function(){
    if ( !this.state.nearbyspots ) {
      return <div>Please wait..</div>
    }
    var places = this.state.nearbyspots
    var locations = places.map(function(place){
      console.log(place.title)
      return <Result name={place.title}/>
    });
    return(
      <table><tbody><tr><td>
      {locations}
            </td></tr></tbody></table>

    )
  }
})