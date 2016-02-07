var Result = React.createClass({
  getInitialProps: function(){
    return{
      name: ''
    }
  },
  getInitialState: function(){
    return{
      name: this.props.name
    }
  },
  render: function(){
    return(
      <p>{this.state.name}</p>
    )
  }
})