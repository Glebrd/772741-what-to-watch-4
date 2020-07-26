import * as React from "react";
import {configure, shallow} from 'enzyme';
import withVideo from "./with-video";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const WrappedMockComponent = withVideo(MockComponent);

describe(`withVideo tests`, () => {

  const wrapper = shallow(<WrappedMockComponent/>);

  beforeEach(() => {
    wrapper.instance()._video.current =
      {
        play: jest.fn(),
        pause: jest.fn(),
        requestFullscreen: jest.fn(),
      };
  });

  test(`handlePlayPause correctly starts video playback`, () => {
    wrapper.setState({isPlaying: false});
    wrapper.instance()._handlePlayPause();

    expect(wrapper.instance()._video.current.play).toHaveBeenCalledTimes(1);
    expect(wrapper.instance()._video.current.pause).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isPlaying).toEqual(true);
  });

  test(`handlePlayPause correctly stops video playback`, () => {
    wrapper.setState({isPlaying: true});
    wrapper.instance()._handlePlayPause();
    expect(wrapper.instance()._video.current.play).toHaveBeenCalledTimes(0);
    expect(wrapper.instance()._video.current.pause).toHaveBeenCalledTimes(1);
    expect(wrapper.state().isPlaying).toEqual(false);
  });

  test(`handleFullScreen calls fullscreen mode correctly`, () => {
    wrapper.instance()._handleFullScreen();
    expect(wrapper.instance()._video.current.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});


