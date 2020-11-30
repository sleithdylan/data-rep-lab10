// Imports React
import React from 'react';
// Imports Card Component
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

// Exports MovieItem Component
export class MovieItem extends React.Component {
  // Constructor
  constructor() {
    // Invoke constructor
    super();
    this.DeleteMovie = this.DeleteMovie.bind(this);
  }

  DeleteMovie(e) {
    e.preventDefault();
    console.log(`Delete: ${this.props.movie._id}`);

    axios
      .delete(`http://localhost:4000/api/movies/${this.props.movie._id}`)
      .then(() => {
        this.props.ReloadData();
      })
      .catch();
  }

  render() {
    return (
      // <div> has been replaced with a React Fragment
      <>
        <Card>
          <Card.Header>{this.props.movie.title}</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <img
                src={this.props.movie.poster}
                width='200'
                height='275'
                alt={this.props.movie.title}
              />
              <footer className='blockquote-footer'>
                <p>{this.props.movie.year}</p>
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={`/edit/${this.props.movie._id}`} className='btn btn-primary'>
            Edit
          </Link>
          <Button variant='danger' onClick={this.DeleteMovie}>
            Delete
          </Button>
        </Card>
      </>
    );
  }
}
