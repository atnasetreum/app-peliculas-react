import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { DetallesPelicula } from './pages/Detail';
import { NotFound } from './pages/NotFound';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
    /*const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <DetallesPelicula id={url.searchParams.get('id')}/>
    : <Home />*/

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detalles/:id' component={DetallesPelicula} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
