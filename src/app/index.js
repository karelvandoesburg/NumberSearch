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
          var id = 'formid' + key;
          return(
            <Form formname={formname} formid={id} key={key} />
          )
        })
        return(
            <div id='container'>
                <img src={logo} />
                <ul onChange={this.handle.bind(this)}>{forms}</ul>
                <div id='inputbutton' onClick={this.retrieveData}>Retrieve Information</div>
            </div>
        );
    }

    retrieveData() {
      console.log(this.refs.formid1);
    }

    handle(event) {
      console.log(event.target.value);
    }
}

class Form extends React.Component {
  render() {
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <div className='formtext-container' ref={this.props.formid}>{this.props.formname}:</div>
          <Input formname={this.props.formname}/>
        </li>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div><input type="text" className="input" name={this.props.formname}/></div>
    )
  }
}

class InputButton extends React.Component {
  constructor() {
    super();
    this.clicked=this.clicked.bind(this);
  }

  render() {
    return (
      <div id='inputbutton' onClick={this.clicked}>Retrieve Information</div>
    )
  }

  clicked() {
    console.log(this.refs.formid1);
  }
}

ReactDOM.render(<Screen />,document.getElementById('wrapper'));
