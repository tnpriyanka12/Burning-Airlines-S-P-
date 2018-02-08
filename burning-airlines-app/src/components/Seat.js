import React, {PureComponent as Component} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Search from './Search'
import Layout from './Layout'


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}


function Genseats(props) {
  console.log('seats:', props.rows);
  for( let i = 0; i < 5; i++ ){
    return (
      <div>
        {props.rows}
      </div>
    );
    }
  }


class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }



  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => alert('clicked') }
      />
    );
  }

  render() {


    return (
      <div>
        <p> In Seat Component: Number of rows: {this.props.plane.rows}</p>
        <p> In Seat Component: Number of col: {this.props.plane.column}</p>
        <Genseats value={this.props.plane.rows}/>

        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <Layout />

      </div>
    );
  }
}


export default Seat;
