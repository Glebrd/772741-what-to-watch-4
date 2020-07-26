import * as React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";


const PrivateRoute = (props) => {
  const {render, path, exact, computedMatch, authorizationStatus, requiredAuthorizationStatus, pathToRedirect} = props;
  return (
    <Route
      path={path}
      exact={exact}
      match={computedMatch}
      render={() => {
        return (
          authorizationStatus === requiredAuthorizationStatus
            ? render(computedMatch)
            : <Redirect to={pathToRedirect} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  computedMatch: PropTypes.object,
  requiredAuthorizationStatus: PropTypes.string,
  pathToRedirect: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
