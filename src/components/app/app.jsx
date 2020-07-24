import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {movieType} from "../../types";
import Player from "../player-page/player-page.jsx";
import {getCurrentMovie} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import history from "../../history";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {getUser} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/films/:id' component={MoviePage} />
        <Route exact path='/films/:id/player' component={Player}/>
        <PrivateRoute
          exact
          path='/films/:id/review'
          requiredAuthorizationStatus={AuthorizationStatus.AUTH}
          pathToRedirect={`/login`}
          render={(match) => {
            return <AddReview
              match={match}
            />;
          }}
        />
        <PrivateRoute
          exact
          path='/mylist'
          requiredAuthorizationStatus={AuthorizationStatus.AUTH}
          pathToRedirect={`/login`}
          render={() => {
            return <MyList/>;
          }}
        />
        <PrivateRoute
          exact
          path='/login'
          requiredAuthorizationStatus={AuthorizationStatus.NO_AUTH}
          pathToRedirect={`/`}
          render={() => {
            return <SignIn/>;
          }}
        />
        <Route exact path='/' component={Main}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  onExit: PropTypes.func,
  login: PropTypes.func,
  currentMovie: movieType,
  promoMovie: movieType,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  currentMovie: getCurrentMovie(state),
  user: getUser(state),
});

export {App};
export default connect(mapStateToProps)(App);
