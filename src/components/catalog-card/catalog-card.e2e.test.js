import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "../catalog-card/catalog-card";

const movie =
  {
    title: `Deep Impact`,
    picture: `img/fantastic-beasts-t she-crimes-of-grindelwald.jpg`,
  };

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Catalog card tests`, () => {
  test(`Movie object is passed on card hover`, () => {
    const handleMovieCardHover = jest.fn();

    const main = shallow(
        <CatalogCard
          movie = {movie}
          onMovieCardHover={handleMovieCardHover}
          onCardClick={() => {}}
        />
    );

    const smallMovieCards = main.find(`.small-movie-card`);

    smallMovieCards.forEach((smallMovieCard) => {
      smallMovieCard.props().onMouseEnter();
      expect(handleMovieCardHover.mock.calls[0][0]).toMatchObject(movie);
    });
  });
});
