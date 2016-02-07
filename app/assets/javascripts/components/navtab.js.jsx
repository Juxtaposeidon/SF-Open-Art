var NavTab = React.createClass({
  getInitialState: function(){
    return {
      link: this.props.link,
      text: this.props.text,
      tabkey: this.props.tabkey
    }
  },
  render: function(){
    return(

    <td className="menuitem" key ={this.state.tabkey}><a href={this.state.link}>{this.state.text}</a></td>

    )
  }
})
