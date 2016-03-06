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
    var linktext = tabs.map(function(tab){
      tabindex = tabs.indexOf(tab)
      return(
        <NavTab
          link={tab.link}
          key={tabindex}
          text={tab.text}
        />
      )
    })
    return(
      <header>
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
      </header>
    )
  }
})

var NavTab = React.createClass({
  getInitialState: function(){
    return {
      link: this.props.link,
      text: this.props.text,
    }
  },

  render: function(){
    return(
      <td className="menuitem">
        <a href={this.state.link}>{this.state.text}</a>
      </td>
    )
  }
})
