import * as React from "react";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import Player from "../player-page/player-page";
import {getCurrentMovie} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import SignIn from "../sign-in/sign-in";
import history from "../../history";
import AddReview from "../add-review/add-review";
import MyList from "../my-list/my-list";
import PrivateRoute from "../private-route/private-route";
import {getUser} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../const";
// nn
const App: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MOVIE} component={MoviePage} />
        <Route exact path={AppRoute.PLAYER_PAGE} component={Player}/>
        <PrivateRoute
          exact
          path={AppRoute.REVIEW_PAGE}
          requiredAuthorizationStatus={AuthorizationStatus.AUTH}
          pathToRedirect={AppRoute.LOGIN}
          render={(match) => {
            return <AddReview
              match={match}
            />;
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          requiredAuthorizationStatus={AuthorizationStatus.AUTH}
          pathToRedirect={AppRoute.LOGIN}
          render={() => {
            return <MyList/>;
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          requiredAuthorizationStatus={AuthorizationStatus.NO_AUTH}
          pathToRedirect={AppRoute.ROOT}
          render={() => {
            return <SignIn/>;
          }}
        />
        <Route exact path={AppRoute.ROOT} component={Main}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  currentMovie: getCurrentMovie(state),
  user: getUser(state),
});

export {App};
export default connect(mapStateToProps)(App);
