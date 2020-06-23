import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePage from "./movie-page.jsx";
import CatalogCard from "../catalog-card/catalog-card";

const movies = [{
  title: `What We Do in the Shadows`,
  picture: `img/what-we-do-in-the-shadows.jpg`,
  genre: `Drama`,
  date: `2014`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
  background: `img/what-we-do-in-the-shadows.jpg`,
  rating: 6,
  scores: 2354,
  director: `Betteanne Langham`,
  starring: [`Linea Raggles`, `Bonnie Halpeine`, `Mellie Pincked`],
  description: `Trevor Reznik is a machinist in a factory. An extreme case of insomnia has led to him not sleeping in a year, and his body withering away to almost nothing. He has an obsessive compulsion to write himself reminder notes and keep track of his dwindling weight, both scribbled on yellow stickies in his apartment. The only person he lets into his life in an emotional sense is Stevie, a prostitute, although he has an infatuation with Maria, a single mother waitress working in an airport diner. His co-workers don't associate with and mistrust him because of not knowing what is going on in his life that has led to his emaciated physical appearance. A workplace incident further alienates him with his coworkers, and in conjunction with some unfamiliar pieces of paper he finds in his apartment, Trevor believes that someone or some people - probably one or some of his coworkers - are out to get him, using a phantom employee named Ivan as their front. As Trevor goes on a search for evidence as to...`
},
{
  title: `Revenant`,
  picture: `img/revenant.jpg`,
  genre: `Documentary`,
  date: `1990`,
  poster: `img/revenant.jpg`,
  background: `img/revenant.jpg`,
  rating: 7,
  scores: 12354,
  director: `Tasha Dumsday`,
  starring: [`Marline Petto`, `Edith Rangell`, `Yuri Hustler`],
  description: `The Fighter is a drama about boxer "Irish" Micky Ward's unlikely road to the world light welterweight title. His Rocky-like rise was shepherded by half-brother Dicky, a boxer-turned-trainer on the verge of being KO'd by drugs and crime.`
},
];
const movie =
{
  title: `We need to talk about Kevin`,
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  genre: `Horror`,
  date: `2020`,
  poster: `img/we-need-to-talk-about-kevin.jpg`,
  background: `img/we-need-to-talk-about-kevin.jpg`,
  rating: 5,
  scores: 1534,
  director: `Lorene Kelley`,
  starring: [`Gawen Trembley`, `Roseann Sexten`, `Glyn Latey`],
  description: `In a futuristic world, a strict regime has eliminated war by suppressing emotions: books, art and music are strictly forbidden and feeling is a crime punishable by death. Cleric John Preston (Bale) is a top ranking government agent responsible for destroying those who resist the rules. When he misses a dose of Prozium, a mind-altering drug that hinders emotion, Preston, who has been trained to enforce the strict laws of the new regime, suddenly becomes the only`
};


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Movie page tests`, () => {
  test(`Card should be pressed`, () => {
    const cardClickHandler = jest.fn();

    const moviePage = shallow(
        <MoviePage
          onCardClick={cardClickHandler}
          movies={movies}
          movie={movie}
        />
    );

    const movieCardTitles = moviePage.find(`.small-movie-card__title`);

    movieCardTitles.forEach((movieCardTitle) => {
      movieCardTitle.props().onClick();
    });

    expect(cardClickHandler.mock.calls.length).toBe(movieCardTitles.length);
  });
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
