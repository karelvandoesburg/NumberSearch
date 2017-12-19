import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ergatislogo.png';
import axios from 'axios';
import Form from './Form';
import ScreenNumbers from './ScreenNumbers';
import Warning from './Warning';
import CompanyChoice from './CompanyChoice';
import Logo from './Logo';
import Button from './Button';

class ScreenStart extends React.Component {

    constructor(props) {
        super();
        this.state = {
            forms : ['Dossiernummer', 'Cliënt achternaam', 'Cliënt geboortedatum (dd-mm-jjjj)'],
            inputdata: [],
            company: props.company,
            warning:''
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
        firstform = <Form formname={firstform} number={0} changeState={this.changeState.bind(this)} enterPressed={this.enterPressed.bind(this)}/>
        var otherforms = [];
        for(var i = 1; i < forms.length; i++) {
          otherforms.push(forms[i]);
        }
        otherforms = otherforms.map(function(item, key){
          var form = <Form formname={item} key={key} number={key+1} changeState={self.changeState.bind(self)} enterPressed={self.enterPressed.bind(self)}/>
          return(form)
        })
        return (
            <div className='container overal'>
                <Logo company={this.state.company}/>
                <Button company={this.state.company} retrieveData={this.retrieveData.bind(this)} />
                <div id='instruction'>Kies een bedrijf en vul het dossiernummer of de volledige naam van de client en zijn/haar geboortedatum in</div>
                <CompanyChoice company={this.props.company}  changeCompany={this.changeCompany.bind(this)}/>
                <div id='firstform'>{firstform}</div>
                <div id='line'>
                  <div id='of'>OF</div>
                </div>
                <div className='container context'>
                  <ul>{otherforms}</ul>
                </div>
                <Warning error={this.state.warning}/>
            </div>
        )
    }

    mapForms(data) {
      data.map(function(item, key){
        var form = <Form formname={item} key={key} number={key} changeState={self.changeState.bind(self)}/>
        return(form)
      })
    }

    changeState(value,searchnumber) {
      var array = this.state.inputdata;
      array[searchnumber]=value;
      this.setState({inputdata:array});
    }

    /*
    retrieveData() {
      var api = '5fca7';
      var self = this;
      axios.post('/api', {
        apiType: this.state.company,
        apiKey: api,
        clientLastName: this.state.inputdata[1],
        clientBirthDate: this.state.inputdata[2],
        dossierId: this.state.inputdata[0]
      })
      .then(function(response) {
        self.processDate(response.data);
      }).catch(function(error){
        alert(error);
      })
    }
    */

    retrieveData() {
      var self = this;
      axios.get('/api/phonesnew.json').then(function(response) {
        self.processData(response.data);
      }).catch(function(error){
        alert(error);
      })
    }

    processData(response) {
      if(this.checkError(response) == true) {
        this.processError(response);
      }
      else {
        ReactDOM.unmountComponentAtNode(document.getElementById("context-container"));
        ReactDOM.render(<ScreenNumbers response={response} company={this.state.company}/>, document.getElementById('context-container'));
      }
    }

    checkError(response) {
      if (response.error) {return true;}
      else {return false;}
    }

    processError(response) {
      var err = response.error;
      var message;
      switch(err) {
        case "Access denied": message = "U heeft geen toegang tot de server";
        case "Specify all details": message = "Vul alstublieft meer informatie in";
        case "No results found": message = "Er zijn geen resultaten gevonden";
        case "Assistant unavailable": message = "De Trajectassistent is momenteel niet bereikbaar";
        default: message="Er is iets fout gegaan, probeer het opnieuw";
      }
      this.setState({warning:message});
    }

    enterPressed(event) {
      var self = this;
      self.retrieveData.bind(self);
      var code = event.keyCode;
      if(code === 13) {self.retrieveData();}
    }

    changeCompany(comp) {
      this.setState({company:comp});
    }

}

export default ScreenStart
