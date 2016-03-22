var LocationSearches = React.createClass({
  render: function () {
    if (this.props.results.length < 1) {
      return (
        <div>
          Your search request returns no results. Please try entering another location.
        </div>
      )
    }
    var resultlist = (this.props.results).map(function (item) {
      return (
        <LSResult
          title={item.title}
          artist={item.artist}
          address={item.address}
          latitude={item.latitude}
          longitude={item.longitude}
          artistlink={"/artists/" + item.artist}
          key={item.id}
        />
      )
    })
    return <div>{resultlist}</div>
  }

})

var LSResult = React.createClass({
  render: function () {
    return (
      <p>
        <a
          className= "noclick result"
          data-latitude={this.props.latitude}
          data-longitude={this.props.longitude}
          data-address={this.props.address}
        >
          {this.props.title}
        </a>
        <br/>
        Search by artist: <a href={this.props.artistlink}>{this.props.artist}</a>
      </p>
    )
  }
})
