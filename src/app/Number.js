import React from 'react';

class Number extends React.Component {
  render() {
    return(
      <div className="number">
        <ul>
          <li id='trajectassistent-header'><span style={{fontFamily:"Fira-Sans"}}>Trajectassistent</span></li>
          <li>naam: <span style={{marginLeft:40 + "px"}}>{this.props.name}</span></li>
          <li>telefoon: <span style={{marginLeft:21 + "px"}}>{this.props.phone}</span></li>
        </ul>
      </div>
    )
  }
}

module.exports = Number;
