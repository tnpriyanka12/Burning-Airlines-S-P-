import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Seat from './Seat';


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


class Airplane extends Component {
  constructor (){
    super();
    this.state = {
      plane: {}
    };
  }


  componentWillMount(){

  const fetchAirplane = () => {
      axios.get('http://localhost:3000/airplanes/1.json').then( results => this.setState({plane: results.data}) );
      };

    //   axios.get('http://localhost:3000/airplanes/', {
    //   id: {props.id}
    // }).then( results => this.setState({plane: results.data}) );
    // };

    fetchAirplane();

}


  render() {

    return (
      <div>
        <h2>Airplane Page</h2>
        <AirplaneDetails plane={ this.state.plane }/>
        <Seat plane={ this.state.plane }/>
      </div>
    );
  }
}

export default Airplane;
