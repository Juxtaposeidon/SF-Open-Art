var Artist = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
        <a href={this.props.link}>{this.props.data}</a>
    );
  }
});