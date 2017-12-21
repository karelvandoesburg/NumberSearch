import React from 'react';

class Warning extends React.Component {

  render(){
    return (
      <div id="Warning" className={this.props.animation}>{this.props.error}</div>
    )
  }

}

export default Warning
