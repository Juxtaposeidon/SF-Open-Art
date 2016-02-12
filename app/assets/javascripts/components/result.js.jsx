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
    shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.name !== this.state.name;
    console.log("trig")
  },
  render: function(){
    return(
      <p class = "nearbylocation">
       Piece Title: {this.state.name}
      <br></br>
      Artist: {this.state.artist} (<a href={this.state.link}>Search</a>)
      <br></br>
      <a href={this.state.address} data-lat={this.state.latitude} data-long={this.state.longitude} className="address">{this.state.address}</a>
      </p>
    )
  }
})

// <p class = "nearbylocation">
//     <%= resultindex + index %>. Piece Title: <%= place.title%>
//     <br>
//     Artist: <%= place.artist%> (<%=link_to "Search", artist_path(place.artist) %>)
//     <br>
//     <%=link_to place.address, location_path(place.title), data: {lat: place.latitude, long: place.longitude}, class: "address" %>
//   </p>