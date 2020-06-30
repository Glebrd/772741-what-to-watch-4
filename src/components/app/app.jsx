import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ScreenType} from "../../const.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state =
      {
        activeScreen: ScreenType.MAIN,
        activePromoMovieCard: false
      };

    this._cardClickHandler = this._cardClickHandler.bind(this);
  }
  _renderApp() {
    const {movies, movie} = this.props;
    const {activeScreen} = this.state;
    switch (activeScreen) {
      case ScreenType.MOVIE:
        return (
          <MoviePage
            movie={this.state.activePromoMovieCard}
            movies={movies}
            onCardClick={this._cardClickHandler}
          />
        );
      case ScreenType.MAIN:
        return (
          <Main
            movieCard = {movie}
            movies={movies}
            onCardClick={this._cardClickHandler}
          />
        );
    }
    return null;
  }
  render() {
    const {movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movie = {movies[0]}
              movies = {movies}
              onCardClick={this._cardClickHandler}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _cardClickHandler(movie) {
    this.setState({
      activeScreen: ScreenType.MOVIE,
      activePromoMovieCard: movie,
    });
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.string,
    poster: PropTypes.string,
    background: PropTypes.string,
    rating: PropTypes.number,
    scores: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
};

export default App;
