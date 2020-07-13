import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ScreenType} from "../../const.js";
import {connect} from "react-redux";
import {movieType} from "../../types";
import Player from "../player-page/player-page.jsx";
import {ActionCreator} from "../../reducer/application/application";
import {getCurrentScreen} from "../../reducer/application/selectors";
import {getCurrentMovie} from "../../reducer/data/selectors";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _renderApp() {
    const {currentScreen, currentMovie, onExit} = this.props;
    switch (currentScreen) {
      case ScreenType.MOVIE:
        return (
          <MoviePage
          />
        );
      case ScreenType.MAIN:
        return (
          <Main
          />
        );
      case ScreenType.PLAYER:
        return (
          <Player
            onExit = {onExit}
            currentMovie = {currentMovie}
          />
        );
    }
    return null;
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  currentScreen: getCurrentScreen(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExit() {
    dispatch(ActionCreator.setCurrentScreen(ScreenType.MAIN));
  },
});

App.propTypes = {
  currentScreen: PropTypes.string,
  onExit: PropTypes.func,
  currentMovie: movieType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
