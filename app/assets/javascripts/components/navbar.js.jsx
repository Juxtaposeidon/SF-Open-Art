var Navbar = React.createClass({
  getInitialState: function(){
    return{
      links: this.props.tabs,
    }
  },
  render: function(){
    var tabs = this.state.links
    linktext = tabs.map(function(tab){
      key = tabs.indexOf(tab)
      return <NavTab link={tab.link}
      text={tab.text}
      tabkey={key}
      />
    })
    return(
        <header>
          <div id="navbar">
            <table id="menutable">
            <tbody>
              <tr id="menurow">
                  <td id ="logotd">
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