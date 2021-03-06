import * as React from "react";
import {formatTime} from "../../utils";
import {FRACTION_TO_PERCENT_COEFFICIENT} from "../../const";

interface Props {
  videoRef: React.RefObject<HTMLMediaElement>;
}

interface State {
  remainingTime: number;
  progressValue: number;
}

const withProgress = (Component) => {
  class WithProgress extends React.PureComponent<Props, State> {
    private _video: HTMLMediaElement;
    constructor(props) {
      super(props);

      this._video = null;

      this.state = {
        remainingTime: 0,
        progressValue: 0,
      };
    }

    componentDidMount() {
      this._video = this.props.videoRef.current;
      this._video.onloadedmetadata = () => this.setState({remainingTime: this._video.duration});
      this._video.ontimeupdate = () => this._handleTimeUpdate(this._video.currentTime, this._video.duration);
    }

    componentWillUnmount() {
      this._video.onloadedmetadata = null;
      this._video.ontimeupdate = null;
    }

    _handleTimeUpdate(currentTime, duration) {
      const remainingTime = duration - currentTime;
      const progressValue = currentTime / duration * FRACTION_TO_PERCENT_COEFFICIENT;

      this.setState({remainingTime, progressValue});
    }

    render() {
      const {remainingTime, progressValue} = this.state;

      return (
        <Component
          {...this.props}
          remainingTime={formatTime(remainingTime)}
          progressValue={progressValue}
        />
      );
    }
  }

  return WithProgress;
};

export default withProgress;
