import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Seat from './Seat';


const SERVER_URL = 'http://localhost:3000/flights.json'
const SERVER_URL_POST = 'http://localhost:3000/flights.json'

function Output (props){
  console.log('output 111 ', props.flights)
  return (
    <div>
      {
         props.flights[0].map( s => <p key={ s.id }>{ s.flight_No} {s.origin }</p> )
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

    this.saveFlight = this.saveFlight.bind( this );
  }

//
//   componentWillMount(){
//
//   const fetchFlights = () => {
//
//     axios.get(SERVER_URL).then( results => this.setState({flights: results.data }));
//   };
//
//   fetchFlights();
//
// }

saveFlight( flight ){
  console.log('saveFlight: ', flight);

  axios.post(SERVER_URL_POST, { origin: flight }).then( results => {
    this.setState({
      flights: [results.data, this.state.flights ]
    });
  });



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
