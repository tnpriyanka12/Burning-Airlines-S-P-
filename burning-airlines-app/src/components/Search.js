// import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Seat from './Seat';
import { Link } from 'react-router-dom';
import React, {PureComponent as Component} from 'react';




const SERVER_URL = 'http://localhost:3000/flights.json'
const SERVER_URL_POST = 'http://localhost:3000/search.json'



function Output (props){
  console.log('output 111 ', props.flights)
  // debugger;
  return (
    <div>
      <table>
        <tr>
        <th> Flight_No</th>
        <th>Origin</th>
        <th> Destination</th>
        </tr><tr>
      {

         props.flights.map( s =>

            <p key={ s.id }>

            <td><Link to={`/flights/${ s.flight_No}`}>{ s.flight_No}</Link></td>
            <td> {s.origin } </td>
            <td> {s.destination }</td>


            </p>

           )
       }
       </tr>
       </table>
    </div>
  );
}

class Search extends Component {
  constructor (){
    super();
    this.state = {
      flights: [],
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

    fetchFlights();


}

render(){
  return(
  <div>
    <h1>AIRLINES</h1>
    <ul>
      <Link to="/Seat">Seating </Link>
    </ul>
    <SearchForm onSubmit={ this.saveFlight } />
    <hr />
      <Output flights={ this.state.flights }/>


  </div>
)}

}

export default Search;
