import React, { Component } from 'react';
import Menu from './components/Navbar';
import Home from './components/Home';
import Ep360 from './components/Ep360';
import Imagine from './components/Imagine';
import References from './components/References';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Cover">
        <Menu />
        <Home />
        <Ep360/>
        <Imagine/>
        <References />
        <Footer />
      </div>
    );
  }
}

export default App;
/*http://localhost/testReactWordpress/RW/wordpress/wp-json/wp/v2

Permet de savoir quelles sont les requetes à faire pour mapper ce qu'on veut
*/
