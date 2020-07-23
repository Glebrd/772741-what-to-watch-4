import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {movieType} from "../../types";
import Player from "../player-page/player-page.jsx";
import {getCurrentMovie, getCurrentScreen} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import history from "../../history";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/films/:id' component={MoviePage} />
          <Route exact path='/films/:id/player' component={Player}/>
          <PrivateRoute
            exact
            path='/films/:id/review'
            render={(match) => {
              return <AddReview
                match={match}
              />;
            }}
          />
          <PrivateRoute
            exact
            path='/mylist'
            render={() => {
              return <MyList/>;
            }}
          />
          <Route exact path='/login' component={SignIn}/>
          <Route exact path='/' component={Main}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentScreen: getCurrentScreen(state),
  promoMovie: getPromoMovie(state),
  currentMovie: getCurrentMovie(state),
});


App.propTypes = {
  currentScreen: PropTypes.string,
  onExit: PropTypes.func,
  login: PropTypes.func,
  currentMovie: movieType,
  promoMovie: movieType,
};

export {App};
export default connect(mapStateToProps)(App);
