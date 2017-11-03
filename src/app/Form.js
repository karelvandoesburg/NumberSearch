import React from 'react';
import Input from './input';

class Form extends React.Component {
  render() {
    var self = this;
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <Input placeholder={self.props.formname} changeState={self.props.changeState} key={self.props.number} number={self.props.number}/>
        </li>
      </div>
    )
  }
}

module.exports = Form;
