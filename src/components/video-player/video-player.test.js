import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const movie = {
  id: 10,
  title: `Joker`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  date: 2019,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 9,
  scores: 899,
  director: `Bale Aspole`,
  starring: [`Hercule Habbes`, `Cindy Coode`, ` Editha Dounbare`, `Giacinta Stones`, `Winna Sherbourne`],
  description: `In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Video-player renders correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          videoRef={React.createRef()}
          poster={movie.picture}
          videoPreview = {movie.videoPreview}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
