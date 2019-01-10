import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pelicula } from './Pelicula';

export class PeliculasLista extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
      const { movies } = this.props

      return (
        <div className="MovieList">
          {
            movies.map(movie => {
              return (
                <div key={movie.imdbID} className="MovieListItem">
                  <Pelicula
                      id={movie.imdbID}
                      title={movie.Title}
                      year={movie.Year}
                      poster={movie.Poster}
                    />
                </div>
              )
            })
          }
        </div>
      )
    }
}