// import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Seat from './Seat';
import { Link } from 'react-router-dom';
import React, {PureComponent as Component} from 'react';




const SERVER_URL = 'http://localhost:3000/flights.json'
const SERVER_URL_POST = 'http://localhost:3000/search.json'
const SERVER_AIRPLANE_URL = 'http://localhost:3000/airplanes/1.json'


function AirplaneDetails (props){
  console.log(`Props are: ${props.plane.rows}`);
  return (
    <div>
    <h1> Inside Airplane Details  </h1>
      <p> Airplane has </p>
      <p> Rows :  { props.plane.rows} </p>
      <p> Columns :  { props.plane.column } </p>
    </div>
  );
}

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
      flights: [],
      plane: {}
    };

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
  };




  componentWillMount(){

  const fetchFlights = () => {

    axios.get(SERVER_URL).then( results => this.setState({flights: results.data }));
  };

  const fetchAirplane = () => {
      axios.get(SERVER_AIRPLANE_URL).then( results => this.setState({plane: results.data}) );
    };

    fetchFlights();
    fetchAirplane();


}

render(){
  return(
  <div>
    <h1>Search Here</h1>
    <ul>
      <Link to="/Seat">
Seating        </Link>
    </ul>
    <SearchForm onSubmit={ this.saveFlight } />
    <hr />
    <Output flights={ this.state.flights }/>
    <AirplaneDetails plane={ this.state.plane }/>

    <Seat />
  </div>
)}

}

export default Search;
