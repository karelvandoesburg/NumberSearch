import React from 'react';
import logoergatis from './images/ergatislogo.png';
import logositagre from './images/sitagre.svg'

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img id="sitagre" src={logositagre} />
      </div>
    )
  }
}

export default Logo
