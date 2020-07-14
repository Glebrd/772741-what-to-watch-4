import React from "react";

const REGEX_EMAIL = /\S+@\S+\.\S+/;

const withValidation = (Component) => {
  class WithValidation extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleChange = this._handleChange.bind(this);

      this.state = {
        isValid: false,
      };
    }

    _handleChange(evt) {
      const {value} = evt.target;
      this.setState({
        isValid: (REGEX_EMAIL.test(value))
      });
    }

    render() {
      const {isValid} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        onChange={this._handleChange}
      />;
    }
  }

  return WithValidation;
};
export default withValidation;


