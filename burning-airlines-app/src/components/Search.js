import React, { Component } from 'react';
import axios from 'axios';



const SERVER_URL = 'http://localhost:3000/flights.json'

class Search extends Component {
  constructor (){
    super();
    this.state = {
      flights: []
    };

  }

  componentWillMount(){


  const fetchFlights = () => {

    axios.get(SERVER_URL).then( results => this.setState({flights: results.data.reverse() }));
  };

  fetchFlights();

}


render(){
  return(
  <div>
    <h1>Search Here</h1>
    <form>
      <label>
        Flight:<input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)}

}


export default Search;
