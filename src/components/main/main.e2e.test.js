import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};
const moviesNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card title should be pressed`, () => {
  const cardTitleClickHandler = jest.fn();

  const main = shallow(
      <Main
        promoMovieName={promoMovie.name}
        promoMovieGenre={promoMovie.genre}
        promoMovieDate={promoMovie.date}
        moviesNames={moviesNames}
        onCardTitleClick={cardTitleClickHandler}
      />
  );

  const movieCardTitles = main.find(`.small-movie-card__title`);

  movieCardTitles.forEach((movieCardTitle) => {
    movieCardTitle.props().onClick();
  });

  expect(cardTitleClickHandler.mock.calls.length).toBe(movieCardTitles.length);
});
