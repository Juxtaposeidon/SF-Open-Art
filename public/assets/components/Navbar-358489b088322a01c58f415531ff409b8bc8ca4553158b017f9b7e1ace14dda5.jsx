var Navbar = React.createClass({
  render: function(){
    var tabs = this.props.tabs
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
                <a href={this.props.logolink}><img src={this.props.image} id="logo"></img></a>
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
  render: function(){
    return(
      <td className="menuitem">
        <a href={this.props.link}>{this.props.text}</a>
      </td>
    )
  }
})
