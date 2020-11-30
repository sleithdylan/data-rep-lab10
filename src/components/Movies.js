// Imports React
import React from 'react';
// Imports MovieItem Component
import { MovieItem } from './MovieItem';

// Exports Movies Component
export class Movies extends React.Component {
  render() {
    // Loops through "movies" state and returns a movie with a movie and key prop
    return this.props.movies.map((movie, imdbID) => {
      return <MovieItem movie={movie} key={imdbID} ReloadData={this.props.ReloadData} />;
    });
  }
}
