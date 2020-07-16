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
import {getCurrentMovie, getCurrentScreen} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation} from "../../reducer/user/user";
import {checkIfObjectEmpty} from "../../utils";
import AddReview from "../add-review/add-teview.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _renderApp() {
    const {currentScreen, promoMovie, currentMovie, onExit, login} = this.props;
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
            // Если выбран фильм в каталоге,то показываем его,если нет,то промо фильм.
            currentMovie = {checkIfObjectEmpty(currentMovie)
              ? currentMovie
              : promoMovie}
          />
        );
      case ScreenType.SIGN_IN:
        return (
          <SignIn
            onSubmit={login}
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
          <Route exact path="/dev-review">
            <AddReview/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  currentScreen: getCurrentScreen(state),
  promoMovie: getPromoMovie(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExit() {
    dispatch(ActionCreator.setCurrentScreen(ScreenType.MAIN));
  },
  login(authData) {
    dispatch(Operation.login(authData));
    dispatch(ActionCreator.setCurrentScreen(ScreenType.MAIN));
  },
});

App.propTypes = {
  currentScreen: PropTypes.string,
  onExit: PropTypes.func,
  login: PropTypes.func,
  currentMovie: movieType,
  promoMovie: movieType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
