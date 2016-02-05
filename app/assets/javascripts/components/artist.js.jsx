var Artist = React.createClass({
  propTypes: {
    data: React.PropTypes.string
  },

  render: function() {
    return (
        <a href={this.props.link}>{this.props.data}</a>
    );
  }
});