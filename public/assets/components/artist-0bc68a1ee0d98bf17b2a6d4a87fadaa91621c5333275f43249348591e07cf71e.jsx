var Artist = React.createClass({
  getInitialState: function(){
    return{
      link: "artists/" + this.props.name,
      name: this.props.name
    }
  },
  render: function() {
    return (
        <p><a href={this.state.link}>{this.state.name}</a></p>
    );
  }
});
