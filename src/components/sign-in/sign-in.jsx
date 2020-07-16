import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import withValidation from "../../hocs/with-validation/with-validation.js";


class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    const {onSubmit, isValid} = this.props;
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
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            onSubmit={this.handleSubmit}
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
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
};

export {SignIn};

export default withValidation(SignIn);