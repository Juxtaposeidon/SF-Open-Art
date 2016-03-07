var ResultList = React.createClass({
  getInitialState: function(){
    return{
      nearbyspots: undefined,
      renderspots:undefined,
      showprev: undefined,
      shownext: undefined,
      index: 0
    }
  },
  componentDidMount: function() {
    var react = this
    navigator.geolocation.getCurrentPosition(function (position){
      $.ajax({
        data:{'lat': position.coords.latitude, 'long': position.coords.longitude},
        url: '/locations',
        success: function(searchresults){
          this.setState({nearbyspots: searchresults["nearbyspots"], showprev: searchresults["prev"], shownext: searchresults["next"], renderspots:searchresults["nearbyspots"].slice(this.state.index, this.state.index+9)})
        }.bind(react)
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
    this.setState({renderspots: this.state.nearbyspots.slice(this.state.index, this.state.index+9)})
  },
  render: function(){
    if ( !this.state.nearbyspots ) {
      return <div>Please wait..</div>
    }
    if (this.state.index < 90){
      var next = <a className="noclick" onClick={this.getResults.bind(this, "Next")}>Next</a>
    }
    if (this.state.index > 0){
      var prev = <a className="noclick" onClick={this.getResults.bind(this, "Previous")}>Previous</a>
    }
    var places = this.state.renderspots
    var locations = places.map(function(place){
      return <Result name={place.title}
      artist={place.artist}
      address={place.address}
      latitude={place.latitude}
      longitude={place.longitude}
      key={place.id}/>
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
  getInitialProps: function(){
    return{
      name: '',
      link: '',
      artist: '',
      address:'',
      latitude:'',
      longitude:''
    }
  },
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
      <br></br>
      Artist: {this.state.artist} (<a href={this.state.link}>Search</a>)
      <br></br>
      <a data-lat={this.state.latitude} data-long={this.state.longitude} data-name={this.state.name} className="address noclick">{this.state.address}</a>
      </p>
    )
  }
})
