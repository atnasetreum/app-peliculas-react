import React, { Component } from 'react';

import { Titulo } from '../components/Titulo';
import { BusquedaForm } from '../components/BusquedaForm';
import { PeliculasLista } from '../components/PeliculasLista';

export class Home extends Component {

    state = { usedSearchs: false, results: [] }

    _handleResults = (results) => {
        this.setState({ results, usedSearchs: true })
    }

    _renderResults = () => {
        return this.state.results.length === 0
        ? <p>Sin resultados 🍒</p>
        : <PeliculasLista movies={this.state.results}/>
    }

    render() {
        return (
            <div>
                <Titulo>Netflix</Titulo>
                <div className="BusquedaForm-wrapper">
                  <BusquedaForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearchs
                  ? this._renderResults()
                  : <small>Use el campo para buscar una pelicula</small>
                }
            </div>
        )
    }
}