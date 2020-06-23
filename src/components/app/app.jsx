import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state =
      {
        activePromoMovieCard: false
      };

    this._cardClickHandler = this._cardClickHandler.bind(this);
  }
  _renderApp() {
    const {movies, promoMovie} = this.props;
    if (this.state.activePromoMovieCard) {
      return (
        <MoviePage
          movie={this.state.activePromoMovieCard}
          movies={movies}
          onCardClick={this._cardClickHandler}
        />
      );
    } else {
      return (
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onCardClick={this._cardClickHandler}
        />
      );
    }
  }
  render() {
    const {movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
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
    this.setState({activePromoMovieCard: movie});
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

export default App;
