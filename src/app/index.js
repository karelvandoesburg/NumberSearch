import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class Screen extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['File id', 'Last name of client', 'Birth date of client', 'Last Name of referrer', 'Company of referrer'],
            formobjects : []
        }
    }

    render() {
        var forms = this.state.forms;
        var formobjects = this.state.formobjects;
        forms = forms.map(function(item, key){
          var id = 'formid' + key;
          var form = <Form formname={item} key={key} formid={id} />
          formobjects.push(form);
          return(
            form
          )
        })
        return(
            <div id='container'>
                <img src={logo} />
                <ul>{forms}</ul>
                <div id='inputbutton' onClick={this.retrieveData.bind(this)}>Retrieve Information</div>
            </div>
        );
    }

    retrieveData() {
      this.state.formobjects.map(function(item) {
        console.log(item.props.formname);
      })
    }

    changeInput() {

    }

    handle(event) {
      console.log(event.target.props.input);
    }
}

class Form extends React.Component {
  constructor() {
      super();
      this.state = {

      }
  }
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
