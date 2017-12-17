import React from 'react';
import ergatis from './images/ergatislogo.png';
import sitagre from './images/sitagre.svg'

class Logo extends React.Component {
  constructor(props) {
    super();
    var com = ergatis;
    if(props.company === "Sitagre") {com = sitagre;}
    this.state = {
      company: com
    }
  }

  render() {
    return (
      <div>
        <img id={this.props.company} src={this.state.company} />
      </div>
    )
  }
}

export default Logo
