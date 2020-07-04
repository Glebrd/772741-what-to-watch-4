import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ScreenType} from "../../const.js";
import {connect} from "react-redux";
import {movieType} from "../../types";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _renderApp() {
    const {currentScreen} = this.props;
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
  currentScreen: state.currentScreen,
});

App.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  movie: movieType,
  currentScreen: PropTypes.string,
};

export {App};
export default connect(mapStateToProps)(App);
