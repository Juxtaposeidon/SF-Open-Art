var ResultList = React.createClass({
  getInitialState: function(){
    return{
      loading: <div id = "content">Now loading... please make sure you are sharing your current location</div>,
      nearbyspots: []

    }
  },

  componentDidMount: function() {
    console.log(this)
    var react = this
    navigator.geolocation.getCurrentPosition(function (position){
      this.serverRequest = $.ajax({
        data: {'lat': position.coords.latitude, 'long': position.coords.longitude},
          url: '/locations',
          success: function(searchresults){
            this.setState({nearbyspots: searchresults["nearbyspots"]})

          }.bind(react)
      })
    // this.serverRequest = $.ajax(this.props.source, function (result) {
    //   var lastGist = result[0];
    //   this.setState({
    //     username: lastGist.owner.login,
    //     lastGistUrl: lastGist.html_url
    //   });
    // }.bind(this));
  })
  },

  render: function(){
    return(
        this.state.loading
      )
  }
})