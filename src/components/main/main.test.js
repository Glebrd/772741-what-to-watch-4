import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};
const moviesNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const cardTitleClickHandler = () => {};

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main promoMovieName={promoMovie.name}
          promoMovieGenre={promoMovie.genre}
          promoMovieDate={promoMovie.date}
          moviesNames={moviesNames}
          onCardTitleClick={cardTitleClickHandler}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
