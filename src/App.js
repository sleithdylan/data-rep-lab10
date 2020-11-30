// Imports React, Component
import React, { Component } from 'react';
// Imports App CSS file
import './App.css';
// Imports Content Component
import { Content } from './components/Content';
// Imports Create Component
import { Create } from './components/Create';
// Imports Read Component
import { Read } from './components/Read';
// Imports Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
// Imports Navbar, Nav Components from React Bootstrap
import { Navbar, Nav } from 'react-bootstrap';

// Imports Router, Switch, Route from React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Edit } from './components/Edit';

// App Component
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* Navbar */}
          <Navbar bg='primary' variant='dark'>
            <Navbar.Brand href='/'>Navbar</Navbar.Brand>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/read'>Read</Nav.Link>
              <Nav.Link href='/create'>Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          {/* Renders the first child <Route> that matches location */}
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// Exports App Component
export default App;
