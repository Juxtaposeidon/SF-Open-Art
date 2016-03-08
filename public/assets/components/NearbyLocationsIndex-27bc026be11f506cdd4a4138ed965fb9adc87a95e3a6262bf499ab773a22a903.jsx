var ResultListContainer = React.createClass({
  getInitialState: function(){
    return{
      nearbyspots: undefined
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
            nearbyspots: searchresults["nearbyspots"]
          })
        }.bind(component)
      })
    })
  },

  render: function(){
    return <ResultList nearbyspots={this.state.nearbyspots}/>
  }
})

var ResultList = React.createClass({
  getInitialState: function(){
    return{
      index: 0
    }
  },

  goBack: function(){
    this.setState({index: this.state.index -= 10})
  },

  goForward: function(){
    this.setState({index: this.state.index += 10})
  },

  render: function(){
    if ( !this.props.nearbyspots ) {
      return <div>Please wait..</div>
    }
    if (this.state.index < 90){
      var next = <a className="noclick" onClick={this.goForward}>Next</a>
    }
    if (this.state.index > 0){
      var prev = <a className="noclick" onClick={this.goBack}>Previous</a>
    }

    var places = this.props.nearbyspots.slice(this.state.index, this.state.index + 9)
    var locations = places.map(function(place){
      return(
        <Result
          name={place.title}
          link= {"artists/" + place.artist}
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
  render: function(){
    return(
      <p className = "nearbylocation">
       Piece Title: {this.props.name}
      <br/>
      Artist: {this.props.artist} (<a href={this.props.link}>Search</a>)
      <br/>
      <a data-lat={this.props.latitude} data-long={this.props.longitude} data-name={this.props.name} className="address noclick">{this.props.address}</a>
      </p>
    )
  }
})
