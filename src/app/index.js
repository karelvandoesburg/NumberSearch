import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class Screen extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['Naam client', 'datum', 'dossier nummer', 'naam iets?']
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



ReactDOM.render(<Screen />,document.getElementById('wrapper'));
