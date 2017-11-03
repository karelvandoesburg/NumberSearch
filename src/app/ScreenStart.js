import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';
import Form from './Form';
import ScreenNumbers from './ScreenNumbers';

class ScreenStart extends React.Component {

    constructor() {
        super();
        this.state = {
            forms : ['Dossier id', 'Client achternaam', 'Client geboortedatum'],
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
        var firstform = this.state.forms[0];
        firstform = <Form formname={firstform} number={0} changeState={this.changeState.bind(this)}/>
        var otherforms = [];
        for(var i = 1; i < forms.length; i++) {
          otherforms.push(forms[i]);
        }
        otherforms = otherforms.map(function(item, key){
          var form = <Form formname={item} key={key} number={key+1} changeState={self.changeState.bind(self)}/>
          return(
            form
          )
        })
        return (
            <div className='container overal'>
                <div className='inputbutton' onClick={this.retrieveData.bind(this)}>Zoek telefoonnummers</div>
                <img src={logo} />
                <div id='instruction'>Vul het dossiernummer of de volledige naam van de client en zijn/haar geboortedatum in</div>
                <div id='firstform'>{firstform}</div>
                <div id='line'>
                  <div id='of'>OF</div>
                </div>
                <div className='container context'>
                  <ul>{otherforms}</ul>
                </div>
            </div>
        )
    }

    mapForms(data) {
      data.map(function(item, key){
        var form = <Form formname={item} key={key} number={key} changeState={self.changeState.bind(self)}/>
        return(
          form
        )
      })
    }

    changeState(value,searchnumber) {
      var array = this.state.inputdata;
      array[searchnumber]=value;
    }

    /*
    retrieveData() {
      var api = '5fca7';
      var self = this;
      axios.post('/api', {
        apiKey: api,
        clientLastName: this.state.inputdata[1],
        clientBirthDate: this.state.inputdata[2],
        dossierId: this.state.inputdata[0]
      })
      .then(function(response) {
        self.processDate(response);
      }).catch(function(error){
        alert(error);
      })
    }
    */

    retrieveData() {
      var self = this;
      console.log(this.state.inputdata);
      console.log("dossierid = "+this.state.inputdata[0]);
      console.log("client achternaam = "+this.state.inputdata[1]);
      console.log("datum: " + this.state.inputdata[2]);
      axios.get('/api/phonesnew.json').then(function(response) {
        self.processDate(response);
      }).catch(function(error){
        alert(error);
      })
    }

    processDate(response) {
      if(response.data.length != 1) {
        ReactDOM.render(<Warning/>, document.getElementById('notenoughinformation'))
      }
      else {
        ReactDOM.render(<ScreenNumbers response={response}/>, document.getElementById('wrapper'))
      }
    }
}

export default ScreenStart
