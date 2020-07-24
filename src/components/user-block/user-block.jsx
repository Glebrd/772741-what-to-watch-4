import React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUser} from "../../reducer/user/selectors";
import PropTypes from "prop-types";
import {userType} from "../../types";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";


const UserBlock = (props) => {
  const {user, authorizationStatus} = props;
  const {avatarURL} = user;
  let fullAvatarURL = `https://4.react.pages.academy${avatarURL}`;

  const userAvatarBlock =
    <Link to={`/mylist`}>
      <div className="user-block__avatar">
        <img src={fullAvatarURL} alt="User avatar" width="63" height="63"/>
      </div>
    </Link>;

  const userSignInLink =
    <Link to={`/login`} href="" className="user-block__link">Sign in</Link>;

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

UserBlock.propTypes = {
  user: userType,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
