var LocationSearches = React.createClass({
  getInitialProps: function(){
    return{
      results: []
    }
  },

  getInitialState: function(){
    return{
      results: this.props.results
    }
  },

  render: function(){
    if(this.state.results.length < 1){
      return(
        <div>
          Your search request returns no results. Please try entering another location.
        </div>
      )
    }
    var resultlist = (this.state.results).map(function(item){
      return <LSResult title={item.title}
      artist={item.artist}
      address={item.address}
      latitude={item.latitude}
      longitude={item.longitude}
      key={item.id}/>
    })
    return(
        <div>{resultlist}</div>
      )
  }

})

var LSResult = React.createClass({
    getInitialProps: function(){
    return{
      title: undefined,
      artist: undefined,
      address: undefined,
      longitude: undefined,
      latitude: undefined,
      artistlink: undefined,
      key: undefined
    }
  },

  getInitialState: function(){
    return{
      title: this.props.title,
      artist: this.props.artist,
      address: this.props.address,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      artistlink: "/artists/" + this.props.artist,
      key: this.props.key
    }
  },

  render: function(){
    return(
      <p>
        <a className= "noclick result" data-latitude={this.state.latitude} data-longitude={this.state.longitude} data-address={this.state.address}>{this.props.title}</a>
        <br></br>
        Search by artist: <a href={this.state.artistlink}>{this.state.artist}</a>
      </p>
    )
  }
})


// <%if @getresults%>
//   <%@results.each do |result|%>
//   <p>
//     <%=link_to result.title, location_path(result.title), class: "result", data: {latitude: result.latitude, longitude: result.longitude, address: result.address} %>
//     <br>
//     <%=result.artist%> (<%=link_to 'search', artist_path(result.artist)%>)
//   </p>
//   <%end%>
// <%else%>
//   <p>
//     Your search request returns no results. Please try entering another location.
//   </p>
// <%end%>
// </div>