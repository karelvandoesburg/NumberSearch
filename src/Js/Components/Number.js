import React from 'react';

class Number extends React.Component {
  render() {
    return(
      <div className="number">
        <ul>
          <li id='trajectassistent-header'>Trajectassistent</li>
          <li>Naam: <span style={{marginLeft:40 + "px"}}>{this.props.name}</span></li>
          <li>Telefoon: <span style={{marginLeft:21 + "px"}}>{this.props.phone}</span></li>
        </ul>
      </div>
    )
  }
}

export default Number
