// Require Express.js
const express = require('express');
// Initialize Express
const app = express();
// Express Port
const port = 4000;
// Require CORS
const cors = require('cors');
// Require Body Parser
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const connectionString =
  'mongodb+srv://admin:admin@cluster0.whmr8.mongodb.net/movies?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

// Movie Schema
var movieSchema = new Schema({
  title: String,
  year: String,
  poster: String
});

// "Movie" Model
var MovieModel = mongoose.model('movie', movieSchema);

// @desc Returns JSON of Movies
// @route GET /api/movies
app.get('/api/movies', (req, res) => {
  // Movies Array
  // const mymovies = [
  //   {
  //     Title: 'Avengers: Infinity War',
  //     Year: '2018',
  //     imdbID: 'tt4154756',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
  //   },
  //   {
  //     Title: 'Captain America: Civil War',
  //     Year: '2016',
  //     imdbID: 'tt3498820',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'
  //   }
  // ];

  MovieModel.find((err, data) => {
    res.json(data);
  });

  // Returns Movies in JSON format
  // res.status(200).json({ message: 'Everything is okay', movies: mymovies });
});

// @desc Returns a specific movie
// @route GET /api/movies/:id
app.get('/api/movies/:id', (req, res) => {
  console.log(req.params.id);

  // Find movie by ID
  MovieModel.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

// @desc Updates a specific movie
// @route PUT /api/movies/:id
app.put('/api/movies/:id', (req, res) => {
  console.log('Update movie: ' + req.params.id);
  console.log(req.body);

  // Finds movie by ID and updates it
  MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    res.send(data);
  });
});

// @desc Deletes a specific movie
// @route DELETE /api/movies/:id
app.delete('/api/movies/:id', (req, res) => {
  console.log('Delete movie: ' + req.params.id);

  // Finds movie by ID and deletes it
  MovieModel.findByIdAndDelete(req.params.id, (err, data) => {
    res.send(data);
  });
});

// @desc Returns Movie title, year & poster to server
// @route POST /api/movies
app.post('/api/movies', (req, res) => {
  console.log('Movie Recieved!');
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);

  // Inserts data into database
  MovieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster
  });

  // Returns "Item Added"
  res.send('Item Added');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
