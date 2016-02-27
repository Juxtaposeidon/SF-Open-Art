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
