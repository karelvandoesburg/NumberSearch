import React from 'react';

class Warning extends React.Component {
  render(){
    return (
      <div id="Warning">{this.props.error}</div>
    )
  }
}

export default Warning
