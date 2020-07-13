import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {ScreenType} from "../../const";
import {adaptMovie, adaptMovies} from "../../adapters/movies";

const mockStore = configureStore([]);

const movie = {
  id: 79,
  title: `The Silence of the Lambs`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Horror`,
  date: `1991`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8,
  scores: 653,
  director: `Pam Iacopetti`,
  starring: [`Pauly Tebbs`, `Kin Monger`, `Morten Wallas`, `Cammy Portsmouth`, `Ruth Bracco`, `Blondy Itzchaki`],
  description: `A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};
const movies = [
  {
    id: 51,
    title: `Star Wars`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    date: `1977`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9,
    scores: 473,
    director: `Pam Iacopetti`,
    starring: [`Wilmette Clohisey`, `Jeromy Issac`, `Clair Standbrook`, `Rona Howe`, `Jamima Goodisson`],
    description: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 132,
    title: `The Lion King`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Kids & Family`,
    date: `1994`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 8,
    scores: 653,
    director: `Gunner Cicchillo`,
    starring: [`Alissa Hewson`, `Roz Dickins`, `Sherwynd Hourihane`, `Reinold Lenden`],
    description: `Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const store = mockStore({
  data: {movies: adaptMovies(movies), promoMovie: adaptMovie(movie)},
  application: {currentGenre: `All genres`, currentScreen: ScreenType.MAIN}
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
          />
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
