import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";


const PrivateRoute = (props) => {
  const {render, path, exact, computedMatch, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      match={computedMatch}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(computedMatch)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  computedMatch: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
