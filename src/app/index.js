import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';

class Screen extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['File id', 'Last name of client', 'Birth date of client', 'Last Name of referrer', 'Company of referrer'],
            inputdata: []
        }
        for(var i = 0; i < this.state.forms.length; i++) {
          this.state.inputdata.push('');
        }
        this.changeState.bind(this);
    }

    render() {
        var self = this;
        var forms = this.state.forms;
        var formobjects = this.state.formobjects;
        forms = forms.map(function(item, key){
          var form = <Form formname={item} key={key} number={key} changeState={self.changeState.bind(self)}/>
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

    /*
    retrieveData() {
      axios.post('/api/phones.json', {
        dossierId: this.state.inputdata[0],
        clientLastName: this.state.inputdata[1],
        clientBirthDate: this.state.inputdata[2],
        referrerLastName: this.state.inputdata[3],
        referrerCompany: this.state.inputdata[4]
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        alert(error);
      })
    }
    */

    changeState(value,searchnumber) {
      var array = this.state.inputdata;
      array[searchnumber]=value;
    }
}

class Form extends React.Component {
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
  render() {
    var self = this;
    return (
      <div><input type="text" className="input" onChange={this.changeInput.bind(this)}/></div>
    )
  }

  changeInput(event) {
    var value = event.target.value;
    var key = this.props.number;
    this.props.changeState(value,key);
  }
}

ReactDOM.render(<Screen />,document.getElementById('wrapper'));
