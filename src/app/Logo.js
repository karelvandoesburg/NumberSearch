import React from 'react';
import ergatis from './images/ergatislogo.png';
import sitagre from './images/sitagre.svg'

class Logo extends React.Component {
  constructor(props) {
    super();
    var com = ergatis;
    if(props.company === "sitagre") {com = sitagre;}
    this.state = {
      company: com
    }
  }

  render() {
    return (
      <div>
        <img id="ergatis" src={ergatis} />
      </div>
    )
  }
}

export default Logo
