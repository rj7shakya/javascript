import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {};

  // renderData = () => {
  //   return this.state.movies.map((movie) => {
  //     <td>movie.title</td>;
  //   });
  // };

  render() {
    return (
      <main className="container">
        <p className="m-3">Showing x movies in the database</p>
        <table className="w-75 table m-3">
          <tr>
            {" "}
            <th>Title</th> <th>Genre</th> <th>Stock</th> <th>Rate</th> <th></th>{" "}
            <th></th>{" "}
          </tr>
          <tr>
            {/* {this.state.movies.map((movie) => {
              <td>movie.title</td>;
            })} */}
          </tr>
        </table>
      </main>
    );
  }
}

export default Movies;
