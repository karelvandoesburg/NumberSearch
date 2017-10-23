import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class Screen extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['File id', 'Last name of client', 'Birth date of client', 'Last Name of referrer', 'Company of referrer'],
            formobjects : [],
            inputdata:['','','','','check']
        }
        this.changeState.bind(this);
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

    changeState(value,searchnumber) {
      var array = this.state.inputdata;
      array[searchnumber]=value;
      console.log(array);
    }
}

class Form extends React.Component {
  constructor() {
      super();
      this.state = {
          inputdata : 'hallo'
      }
  }

  render() {
    var self = this;
    return(
      <div className='formunit-container'>
        <li className="formunit">
          <div className='formtext-container'>{this.props.formname}:</div>
          <Input changeState={self.props.changeState} key={self.props.number} number={self.props.number}/>
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
    var key = this.props.number;
    this.props.changeState(value,key);
  }

  clicked() {
    console.log(this.state.input);
  }
}

ReactDOM.render(<Screen />,document.getElementById('wrapper'));
