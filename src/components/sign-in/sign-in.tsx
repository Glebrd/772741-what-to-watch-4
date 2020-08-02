import * as React from "react";
import withValidation from "../../hocs/with-validation/with-validation";
import {Operation} from "../../reducer/user/user";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {History} from "history";


interface Props {
  onSubmit: ({login, password}: {login: string; password: string}) => void;
  isValid: boolean;
  onChange: () => {void};
  history: History;
}

class SignIn extends React.PureComponent<Props, {}> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(evt) {
    const {onSubmit, isValid, history} = this.props;
    evt.preventDefault();
    if (isValid) {
      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }
  }

  render() {
    const {onChange, isValid} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            onSubmit={this._handleSubmit}
            action="" className="sign-in__form">
            {!isValid &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this.loginRef}
                  onChange={onChange}
                  className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={this.passwordRef}
                  autoComplete="off"
                  className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(Operation.login(authData));
  },
});

export {SignIn};

export default connect(null, mapDispatchToProps)(withValidation(SignIn));
