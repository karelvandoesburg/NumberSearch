import React from 'react';
import ReactDOM from 'react-dom';
import Number from './Number';
import logo from './images/ergatislogo.png';
import ScreenStart from './ScreenStart';

class ScreenNumbers extends React.Component {
  render(){
    var data = this.props.response[0];
    var dataobject = <Number type={data.type} name={data.name} phone={data.phone}/>;

    return(
      <div className='container overal'>
          <img src={logo} />
          {dataobject}
          <div className='inputbutton' id='backbutton' onClick={this.goBack}>Nieuwe Zoekopdracht</div>
      </div>
    )
  }

  goBack() {
    ReactDOM.render(<ScreenStart />,document.getElementById('wrapper'));
  }
}

export default ScreenNumbers
