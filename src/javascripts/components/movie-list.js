import React from 'react'
import {Movie} from './movie'
export class MovieList extends React.Component{
    constructor(props) { //Code needed in order for compare and sort to work below
        super(props)
        this.state = {movies: this.props.movies} //state allows the page to be dynamic and change instead of read-only
        this.sortMovies = this.sortMovies.bind(this)
    }

    sortMovies(){ //compares and sorts
        this.state.movies.sort((a,b) => {
            return b.votes - a.votes
        })
        this.setState({
            movies: this.state.movies
        })
    }


    render() {
      return(
        <div className="container">
          <header>
            <h1>Top 10 Movies: Amanda Nef</h1>
          </header>
          <nav>
            <ul>
              <li>Home</li>
              <li>List</li>
              <li>About</li>
            </ul>
            <button className="primary" onClick={this.sortMovies}>Sort</button>
          </nav>
          <main>
            {this.state.movies.map(m => {
              return <Movie key={m.id} movie={m}/>
            })}
          </main>
        </div>
      )
    }
  }