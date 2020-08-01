import * as React from "react";
import {configure, shallow} from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";
import {SmallMovieCard} from "./small-movie-card";
import {MOVIE_WAIT} from "../../const";

const movie = {
  id: 36,
  title: `Home`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Documentary`,
  date: 2009,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 6,
  scores: 852,
  director: `Gaye Goldes`,
  starring: [`Julia Bazeley`, `Suellen Grinaugh`, `Mandie Wickie`, `Con Bride`],
  description: `With aerial footage from fifty-four countries, 'Home' is a depiction of how Earth's problems are all interlinked.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundColor: `#D8E3E5`,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  runTime: 135,
  isFavorite: true,
};

configure({adapter: new Adapter()});

describe(`SmallMovieCard tests`, () => {
  test(`video stops to play when call handleMouseLeave`, () => {
    const videoRef = {
      play: jest.fn(),
      load: jest.fn(),
    };
    const wrapper = shallow(
        <SmallMovieCard
          smallMovieCard={movie}
        />
    );
    wrapper.instance()._videoRef.current = videoRef;
    wrapper.instance()._handleMovieCardUnhover();
    expect(wrapper.instance()._videoRef.current.play).toHaveBeenCalledTimes(0);
    expect(wrapper.instance()._videoRef.current.load).toHaveBeenCalledTimes(1);
  });

  test(`video starts to play when call handleMouseLeave`, (done) => {
    const videoRef = {
      play: jest.fn(),
      load: jest.fn(),
    };
    const wrapper = shallow(
        <SmallMovieCard
          smallMovieCard={movie}
        />
    );
    wrapper.instance()._videoRef.current = videoRef;
    wrapper.instance()._handleMovieCardHover();
    setTimeout(() => {
      expect(wrapper.instance()._videoRef.current.play).toHaveBeenCalledTimes(1);
      done();
    }, MOVIE_WAIT);
  });
});
