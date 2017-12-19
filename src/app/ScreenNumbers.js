import React from 'react';
import ReactDOM from 'react-dom';
import Number from './Number';
import Logo from './Logo';
import Button from './Button';
import ScreenStart from './ScreenStart';

class ScreenNumbers extends React.Component {
  render(){
    var data = this.props.response[0];
    var dataobject = <Number type={data.type} name={data.name} phone={data.phone}/>;

    return(
      <div>
        {dataobject}
      </div>
    )
  }

  goBack() {
    ReactDOM.render(<ScreenStart company="Ergatis"/>,document.getElementById('context-container'));
  }
}

export default ScreenNumbers
