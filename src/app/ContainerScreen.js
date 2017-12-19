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
import ScreenStart from './ScreenStart';

class ContainerScreen extends React.Component {

    constructor(props) {
        super();
        var form = ['Dossiernummer', 'Cliënt achternaam', 'Cliënt geboortedatum (dd-mm-jjjj)']
        this.state = {
            forms : form,
            inputdata: [],
            company: props.company,
            button: props.company,
            warning:'',
        }
        for(var i = 0; i < this.state.forms.length; i++) {
          this.state.inputdata.push('');
        }
        this.state.context = <ScreenStart company={this.state.company} forms={this.state.forms} changeState={this.changeState.bind(this)} enterPressed={this.enterPressed.bind(this)} changeCompany={this.changeCompany.bind(this)}/>;
    }

    render() {
      return (
            <div className='container overal'>
                <Logo company={this.state.company}/>
                <Button button={this.state.button} retrieveData={this.retrieveData.bind(this)} Screen={this.state.Screen}/>
                {this.state.context}
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
        this.setState({button: "backbutton", context: <ScreenNumbers response={response} company={this.state.company}/>})
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
      this.setState({company:comp, button:comp});
    }

}

export default ContainerScreen
