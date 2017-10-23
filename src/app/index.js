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
        var self = this;
        var forms = this.state.forms;
        var formobjects = this.state.formobjects;
        forms = forms.map(function(item, key){
          var id = 'formid' + key;
          var form = <Form formname={item} key={key} number={key} formid={id} changeState={self.changeState.bind(self)}/>
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
        console.log(item);
      })
    }

    changeState(value) {
      console.log(value);
    }
}

class Form extends React.Component {
  render() {
    var self = this;
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <div className='formtext-container'>{this.props.formname}:</div>
          <Input changeState={self.props.changeState}/>
        </li>
      </div>
    )
  }
}

class Input extends React.Component {
  constructor() {
      super();
      this.state = {
          input : ""
      }
  }

  render() {
    var self = this;
    return (
      <div><input type="text" className="input" onClick={this.clicked.bind(this)} onChange={this.changeInput.bind(this)}/></div>
    )
  }

  setInputState(event) {
    this.setState({input : event.target.value});
    console.log(event.target.value);
  }

  changeInput(event) {
    var value = event.target.value;
    this.props.changeState(value);
  }

  clicked() {
    console.log(this.state.input);
  }
}

ReactDOM.render(<Screen />,document.getElementById('wrapper'));
