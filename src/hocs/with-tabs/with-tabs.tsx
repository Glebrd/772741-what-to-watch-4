import * as React from "react";

interface Props {
  onGenreChange: (genre:string) => {};
  genres: string[];
}

interface State {
  currentTab: string;
}

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent<Props,State> {
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

  return WithTabs;
};
export default withTabs;
