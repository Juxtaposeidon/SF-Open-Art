var Navbar = React.createClass({
  getInitialState: function(){
    return{
      links: this.props.tabs,
      logolink: this.props.logolink,
      logo: this.props.image
    }
  },
  render: function(){
    var tabs = this.state.links
    console.log(this.state.logo)
    linktext = tabs.map(function(tab){
      key = tabs.indexOf(tab)
      return <NavTab link={tab.link}
      text={tab.text}
      tabkey={key}/>
    })
    return(
        <header>
          <div id="navbar">
            <table id="menutable">
            <tbody>
              <tr id="menurow">
                  <td id ="logotd">
                  <a href={this.state.logolink}><img src={this.state.logo} id="logo"></img></a>
                    </td>
                {linktext}
              </tr>
              </tbody>
            </table>
          </div>
        </header>
      )
  }
})