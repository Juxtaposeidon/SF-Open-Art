var ResultList = React.createClass({
  getInitialState: function(){
    return{
      nearbyspots: undefined,
      renderspots: undefined,
      index: 0
    }
  },

  componentDidMount: function() {
    var component = this
    navigator.geolocation.getCurrentPosition(function (position){
      $.ajax({
        data:{
          'lat': position.coords.latitude,
          'long': position.coords.longitude
        },
        url: '/nearbylocations',
        success: function(searchresults){
          this.setState({
            nearbyspots: searchresults["nearbyspots"],
            renderspots:searchresults["nearbyspots"].slice(this.state.index, this.state.index+9)
          })
        }.bind(component)
      })
    })
  },

  getResults: function(direction){
    if (direction == "Previous"){
      this.state.index -= 10
    }
    else{
       this.state.index += 10
    }
    this.setState({
      renderspots: this.state.nearbyspots.slice(this.state.index, this.state.index+9)
    })
  },

  goBack: function(){
    this.getResults("Previous")
  },

  goForward: function(){
    this.getResults("Next")
  },

  render: function(){
    if ( !this.state.nearbyspots ) {
      return <div>Please wait..</div>
    }
    if (this.state.index < 90){
      var next = <a className="noclick" onClick={this.goForward}>Next</a>
    }
    if (this.state.index > 0){
      var prev = <a className="noclick" onClick={this.goBack}>Previous</a>
    }
    var places = this.state.renderspots
    var locations = places.map(function(place){
      return(
        <Result
          name={place.title}
          artist={place.artist}
          address={place.address}
          latitude={place.latitude}
          longitude={place.longitude}
          key={place.id}
        />
      )
    });
    return(
      <div id="locations">
      {locations}
      {prev} {next}
      </div>
    )
  }
})

var Result = React.createClass({
  getInitialState: function(){
    return{
      name: this.props.name,
      link: "artists/" + this.props.artist,
      artist: this.props.artist,
      address: this.props.address,
      latitude: this.props.latitude,
      longitude: this.props.longitude
    }
  },

  render: function(){
    return(
      <p className = "nearbylocation">
       Piece Title: {this.state.name}
      <br/>
      Artist: {this.state.artist} (<a href={this.state.link}>Search</a>)
      <br/>
      <a data-lat={this.state.latitude} data-long={this.state.longitude} data-name={this.state.name} className="address noclick">{this.state.address}</a>
      </p>
    )
  }
})
