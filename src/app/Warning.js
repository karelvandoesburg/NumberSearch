import React from 'react';

class Warning extends React.Component {

  render(){
    return (
      <div id="Warning" className="warninganimation">{this.props.error}</div>
    )
  }

}

export default Warning
