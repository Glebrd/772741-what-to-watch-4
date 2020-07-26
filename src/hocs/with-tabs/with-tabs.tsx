import * as React from "react";
import {movieType} from "../../types";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: ``,
      };

      this._handleTabSwitch = this._handleTabSwitch.bind(this);
    }
    _handleTabSwitch(tab) {
      this.setState({currentTab: tab});
    }
    render() {
      const {currentTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={currentTab}
          onChangeTab={this._handleTabSwitch}
        />
      );
    }
  }

  // WithTabs.propTypes = {
  //   movie: movieType,
  // };
  return WithTabs;
};
export default withTabs;
