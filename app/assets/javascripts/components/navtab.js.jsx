var NavTab = React.createClass({
  getInitialState: function(){
    return {
      link: this.props.link,
      text: this.props.text,
    }
  },
  render: function(){
    return(

    <td className="menuitem"><a href={this.state.link}>{this.state.text}</a></td>

    )
  }
})
