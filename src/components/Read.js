// Imports React
import React from 'react';
// Imports Movies Component
import { Movies } from './Movies';
// Imports axios
import axios from 'axios';

// Exports Read Component
export class Read extends React.Component {
  // Constructor
  constructor() {
    // Invoke constructor
    super();
    this.ReloadData = this.ReloadData.bind(this);
  }
  state = {
    // movies state
    movies: []
  };

  // Lifecycle Hook
  componentDidMount() {
    axios
      // Get Request to API
      .get('http://localhost:4000/api/movies')
      // Get Response
      .then(res => {
        // Update movies state with data from API
        this.setState({ movies: res.data });
      })
      // Return error if anything goes wrong
      .catch(err => console.log(err));
  }

  ReloadData() {
    axios
      // Get Request to API
      .get('http://localhost:4000/api/movies')
      // Get Response
      .then(res => {
        // Update movies state with data from API
        this.setState({ movies: res.data });
      })
      // Return error if anything goes wrong
      .catch(err => console.log(err));
  }

  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <Movies movies={this.state.movies} ReloadData={this.ReloadData} />
      </>
    );
  }
}
