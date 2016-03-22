var ArtistPage = React.createClass({
  render: function () {
    var art = this.props.works
    var artistworks = art.map(function (item) {
      index = art.indexOf(item)
      return (
        <ArtistWork
          title={item.title}
          address={item.address}
          longitude={item.longitude}
          latitude={item.latitude}
          key={index}
        />
      )
    })

    return (
      <div>
      <h3>Works of {this.props.artist}</h3>
        {artistworks}
      </div>
    )
  }
})

var ArtistWork = React.createClass({
  render: function () {
    return (
      <p>
        <a
          className="artname noclick"
          data-latitude={this.props.latitude}
          data-longitude={this.props.longitude}
          data-address={this.props.address}
        >
          {this.props.title}
        </a>
      </p>
    )
  }
})