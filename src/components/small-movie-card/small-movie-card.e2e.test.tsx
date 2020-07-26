import * as React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {SmallMovieCard} from "./small-movie-card";

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
};

configure({adapter: new Adapter()});

describe(`withPlayOnHover tests`, () => {
  test(`video stops to play when call handleMouseLeave`, () => {
    let videoRef = {
      play: jest.fn(),
      load: jest.fn(),
    };
    let catalogCard = shallow(
        <SmallMovieCard
          smallMovieCard={movie}
          onCardClick={()=>{}}
        />
    );
    catalogCard.instance()._videoRef.current = videoRef;
    catalogCard.instance()._handleMovieCardUnhover();
    expect(catalogCard.instance()._videoRef.current.play).toHaveBeenCalledTimes(0);
    expect(catalogCard.instance()._videoRef.current.load).toHaveBeenCalledTimes(1);
  });
});
