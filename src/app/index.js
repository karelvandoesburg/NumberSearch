import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class Screen extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['File id', 'Last name of client', 'Birth date of client', 'Last Name of referrer', 'Company of referrer']
        }
    }

    render() {
        var forms = this.state.forms;
        forms = forms.map(function(formname, key){
          return(
            <Form formname={formname} key={key} />
          )
        })
        return(
            <div id='container'>
                <img src={logo} />
                <ul>{forms}</ul>
                <InputButton />
            </div>
        );
    }
}

class Form extends React.Component {
  render() {
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <div className='formtext-container'>{this.props.formname}:</div>
          <Input formname={this.props.formname}/>
        </li>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div><input type="text"  className="input" name={this.props.formname}/></div>
    )
  }
}

class InputButton extends React.Component {
  render() {
    return (
      <div id='inputbutton'>Retrieve Information</div>
    )
  }
}



ReactDOM.render(<Screen />,document.getElementById('wrapper'));
