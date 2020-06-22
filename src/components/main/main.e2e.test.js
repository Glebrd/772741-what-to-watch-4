import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const movies = [];
const promoMovie = {};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component tests`, () => {
  test(`Card title should be pressed`, () => {
    const cardTitleClickHandler = jest.fn();

    const main = shallow(
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onCardTitleClick={cardTitleClickHandler}
        />
    );

    const movieCardTitles = main.find(`.small-movie-card__title`);

    movieCardTitles.forEach((movieCardTitle) => {
      movieCardTitle.props().onClick();
    });

    expect(cardTitleClickHandler.mock.calls.length).toBe(movieCardTitles.length);
  });
});
