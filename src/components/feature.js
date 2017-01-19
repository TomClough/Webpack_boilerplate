import React, { Component } from 'react';
import { Link } from 'react-router';

class Feature extends Component {
  render() {    
    return (
      <div>
        Feature
        <Link to={'/'} >
          Home
        </Link>
      </div>
    );
  }
}


export default Feature;