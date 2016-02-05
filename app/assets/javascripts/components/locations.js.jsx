var Location = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.data.title}</div>
      </div>
    );
  }
});