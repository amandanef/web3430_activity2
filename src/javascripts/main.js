// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import "bootstrap"

import React from 'react'
import ReactDOM from 'react-dom'
import {movies} from './movies.js'
import { MovieList } from './components/movie-list.js'

class Main extends React.Component {
  render(){
    return <MovieList movies={movies}/> //movies = movies is how we pass in the parameter
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'))
