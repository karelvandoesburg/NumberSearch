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
      <div className='container overal'>
        <Logo company={this.props.company}/>
        <Button company={this.props.company} />
        {dataobject}
      </div>
    )
  }

  goBack() {
    ReactDOM.render(<ScreenStart />,document.getElementById('context-container'));
  }
}

export default ScreenNumbers
