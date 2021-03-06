var ArtistList = React.createClass({
  render: function () {
    var allartists = this.props.artists
    var artistlength = allartists.length/3
    var artistList1 = allartists.slice(0, artistlength).map(function (person) {
    return (
      <Artist
        name={person}
        link={"/artists/" + person}
      />
    )
    });
    var artistList2 = allartists.slice(artistlength,artistlength*2).map(function (person) {
        return (
          <Artist
            name={person}
            link={"/artists/" + person}
          />
        )
    });
    var artistList3 = allartists.slice(artistlength*2,artistlength*3).map(function (person) {
        return (
          <Artist
            name={person}
            link={"/artists/" + person}
          />
        )
    });

    return (
      <table id="artisttable">
        <tbody>
          <tr>
            <td>
              {artistList1}
            </td>
            <td>
              {artistList2}
            </td>
            <td>
              {artistList3}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

var Artist = React.createClass({
  render: function () {
    return (
      <p><a href={this.props.link}>{this.props.name}</a></p>
    );
  }
});
