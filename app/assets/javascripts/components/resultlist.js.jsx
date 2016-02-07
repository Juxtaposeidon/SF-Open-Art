var ResultList = React.createClass({
  getInitialState: function(){
    return{
      loading: <div id = "content">Now loading... please make sure you are sharing your current location</div>
    }
  },
  render: function(){
    return(
        this.state.loading
      )
  }
})