import * as React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUser} from "../../reducer/user/selectors";
import {UserType} from "../../types";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../const";

const SERVER_URL = `https://4.react.pages.academy`;

interface Props {
    user: UserType;
    authorizationStatus: string;
}

const UserBlock: React.FunctionComponent<Props> = (props: Props) => {
  const {user, authorizationStatus} = props;
  const {avatarURL} = user;
  const fullAvatarURL = SERVER_URL + avatarURL;

  const userAvatarBlock =
    <Link to={AppRoute.MY_LIST}>
      <div className="user-block__avatar">
        <img src={fullAvatarURL} alt="User avatar" width="63" height="63"/>
      </div>
    </Link>;

  const userSignInLink =
    <Link to={AppRoute.LOGIN} href="" className="user-block__link">Sign in</Link>;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ?
        userAvatarBlock
        :
        userSignInLink
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
