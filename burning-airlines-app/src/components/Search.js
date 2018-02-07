import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Seat from './Seat';


const SERVER_URL = 'http://localhost:3000/flights.json'
const SERVER_URL_POST = 'http://localhost:3000/search.json'

function Output (props){
  console.log('output 111 ', props.flights)
  // debugger;
  return (
    <div>
      {
         props.flights.map( s => <p key={ s.id }>{ s.flight_No} {s.origin } {s.destination }</p> )
       }
    </div>
  );
}

class Search extends Component {
  constructor (){
    super();
    this.state = {
      flights: []
    };
1
    this.saveFlight = this.saveFlight.bind( this );
  }

  saveFlight( flight ){
    console.log('saveFlight: ', flight);

    // Rails:   Secret.create content: secret
    axios.post(SERVER_URL_POST, { content: flight }).then( results => {
      console.log('Filtered Results are: ',results.data.results);
      this.setState({
        flights: results.data.results[0]
      });
    });
  });




  componentWillMount(){

  const fetchFlights = () => {

    axios.get(SERVER_URL).then( results => this.setState({flights: results.data }));
  };

  fetchFlights();

}

render(){
  return(
  <div>
    <h1>Search Here</h1>
    <SearchForm onSubmit={ this.saveFlight } />
    <hr />
    <Output flights={ this.state.flights }/>
    <Seat />
  </div>
)}

}

export default Search;
