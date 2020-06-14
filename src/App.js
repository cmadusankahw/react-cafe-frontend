import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES
    };
}

  render() {
    return (
      <div className="App">
        <Navbar color="primary" dark>
          <div className="container">
            <NavbarBrand href="/"> Chiran's Cafe</NavbarBrand>
          </div>
        </Navbar>
       <Menu dishes={this.state.dishes} />
      </div>
    );
  }
 
}

export default App;
