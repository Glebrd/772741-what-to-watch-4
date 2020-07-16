import React from "react";
import {connect} from "react-redux";

import {getUser} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/application/application";
import {ScreenType} from "../../const";
import {checkIfObjectEmpty} from "../../utils";
import PropTypes from "prop-types";
import {userType} from "../../types";


const UserBlock = (props) => {
  const {user, onSignInClick} = props;
  const {avatarURL} = user;
  let fullAvatarURL = `https://4.react.pages.academy${avatarURL}`;

  const userAvatarBlock =
    <div className="user-block__avatar">
      <img src={fullAvatarURL} alt="User avatar" width="63" height="63"/>
    </div>;

  const userSignInLink =
    <a
      onClick={onSignInClick} href="" className="user-block__link">Sign in
    </a>;

  return (
    <div className="user-block">
      {checkIfObjectEmpty(user)
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
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick(evt) {
    evt.preventDefault();
    dispatch(ActionCreator.setCurrentScreen(ScreenType.SIGN_IN));
  },
});

UserBlock.propTypes = {
  user: userType,
  onSignInClick: PropTypes.func,
};

export {UserBlock};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);