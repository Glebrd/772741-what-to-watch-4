import React from "react";
import renderer from "react-test-renderer";
import {SmallMovieCard} from "./small-movie-card.jsx";

const movie = {
  id: 29,
  title: `The Dark Knight`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Crime`,
  date: 2008,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8,
  scores: 1093,
  director: `Shaun Cathrall`,
  starring: [`Milissent Brahm`, `Gae Turton`, `Mitzi Baigrie`, `Tremayne Kilvington`, `Renado Dillon`],
  description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const onCardClick = () => {};
const onMovieCardHover = () => {};

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          smallMovieCard={movie}
          onCardClick={onCardClick}
          onMovieCardHover={onMovieCardHover}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
