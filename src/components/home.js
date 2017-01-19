import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {    
    return (
      <div>
        Home Screen
        <Link to={'/feature'} >
          Feature
        </Link>
      </div>
    );
  }
}


export default Home;