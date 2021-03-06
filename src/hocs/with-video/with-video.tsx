import * as React from "react";

const FIREFOX_FULSCREEN_METHOD = `mozRequestFullScreen`;

interface State {
  isPlaying: boolean;
}

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent<{}, State> {
    private _video: React.RefObject<HTMLVideoElement>;
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
      };

      this._video = React.createRef();
      this._handlePlayPause = this._handlePlayPause.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
    }
    _handlePlayPause() {
      const {isPlaying} = this.state;
      if (!isPlaying) {
        this._video.current.play();
      } else {
        this._video.current.pause();
      }
      this.setState({isPlaying: !isPlaying});
    }

    _handleFullScreen() {
      if (this._video.current[FIREFOX_FULSCREEN_METHOD]) {
        this._video.current.controls = !this._video.current.controls;
        this._video.current[FIREFOX_FULSCREEN_METHOD]();
      } else {
        this._video.current.requestFullscreen();
      }
    }
    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this._video}
          isPlaying={isPlaying}
          onPlayPause={this._handlePlayPause}
          onFullScreen={this._handleFullScreen}
        />
      );
    }
  }
  return WithVideo;
};
export default withVideo;
