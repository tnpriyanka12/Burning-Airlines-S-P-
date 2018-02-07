import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    const someStateID = 20;

    return (
      <div>
        <h2>Home Page</h2>

          Click for Flight Search
          <br/> <Link to="/search"> FLIGHT SEARCH</Link><hr/>
          What is this website for? This is answered in <Link to="/faq/23">FAQ #23</Link><br/>

          A link from state: <Link to={`/faq/${someStateID}`}>here</Link><br/>


      </div>
    );
  }
}

export default Home;
