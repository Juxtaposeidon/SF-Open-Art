var ArtistPage = React.createClass({
  getDefaultProps: function(){
    return{
      artist: '',
      works: []
    }
  },
  getInitialState: function(){
    return{
      artist:this.props.artist,
      works:this.props.works
    }
  },
  render: function(){
    var art = this.state.works
    var artistwork = art.map(function(item){
      index = art.indexOf(item)
      return <ArtistWork title={item.title}
      address={item.address}
      longitude={item.longitude}
      latitude={item.latitude}
      key={index}/>
    })

    return(
      <div>
      <h3>Works of {this.state.artist}</h3>
      {artistwork}
      </div>
    )
  }
})

var ArtistWork = React.createClass({
  getDefaultProps: function(){
    return{
      title: '',
      address:"",
      longitude: undefined,
      latitude: undefined
    }
  },
  getInitialState: function(){
    return{
      title: this.props.title,
      address: this.props.address,
      longitude: this.props.longitude,
      latitude: this.props.latitude
    }
  },
  render: function(){
    return(
      <p><a className="artname noclick" data-latitude={this.state.latitude} data-longitude={this.state.longitude} data-address={this.state.address}>{this.state.title}</a></p>
    )
  }
})