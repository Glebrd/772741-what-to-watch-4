import * as React from "react";
import {Route, Redirect, match} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

interface Props {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: (computedMatch: match) => React.ReactNode;
  computedMatch: match;
  requiredAuthorizationStatus: string;
  pathToRedirect: string;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
