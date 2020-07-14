import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {adaptMovie, adaptMovies} from "../../adapters/movies";

const mockStore = configureStore([]);

const movie = {
  id: 417,
  title: `WALL·E`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Kids & Family`,
  date: `2008`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 5.4,
  scores: 1002,
  director: `Sukey Remirez`,
  starring: [`Jackelyn Hurt`, `Bartholomeus Wilds`, `Farris Spillane`, `Latisha Brown`],
  description: `In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const movies = [
  {
    id: 47,
    title: `The Prestige`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Thriller`,
    date: `2006`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9.1,
    scores: 963,
    director: `Cyrillus Dinkin`,
    starring: [`Betsy Gouldeby`, `Katinka Durdle`, `Joaquin Vernham`, `Porty Flintoffe`],
    description: `After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 77,
    title: `Lock, Stock and Two Smoking Barrels`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    date: `1998`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 8.2,
    scores: 1002,
    director: `Launce Slatcher`,
    starring: [`Leora Pendall`, `Cross Buttel`, `Lisbeth Bolland`, `Andrus Gogay`],
    description: `A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const store = mockStore({
  data: {movies: adaptMovies(movies), promoMovie: adaptMovie(movie)},
  application: {currentGenre: `All genres`},
  user: {user: {avatarURL: `img/1.png`}},
});

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
