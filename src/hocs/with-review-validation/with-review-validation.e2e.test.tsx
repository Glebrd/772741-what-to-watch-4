import * as React from "react";
import {configure, shallow, mount} from 'enzyme';
import {withReviewValidation} from "./with-review-validation";
import * as Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {adaptMovie, adaptMovies} from "../../adapters/movies";

const mockStore = configureStore();

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
  application: {currentGenre: `All genres`},
  user: {user: {avatarURL: `img/1.png`}},
});


const MockComponent = () => <div/>;
const WrappedMockComponent = withReviewValidation(MockComponent);
configure({adapter: new Adapter()});

describe(`State correctly changed by handleReviewChange`, () => {
  const wrapper = mount(shallow(
      <WrappedMockComponent
        store={store}
        match={{params: {id: 1}}}
      />).get(0));
  test(`Valid review should change reviewIsValid to true`, () => {
    const event = {
      target: {
        value: `The Darjeeling Limited is certainly a visually appealing movie. The rich colors of southeast Asia mesh wonderfully with Anderson's penchant for precise set-pieces, and it make the entire experience a pleasure to watch.`
      }
    };
    wrapper.instance()._handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(true);
  });

  test(`Invalid review should change reviewIsValid to false`, () => {
    const event = {
      target: {
        value: `Very bad film`
      }
    };
    wrapper.instance()._handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(false);
  });
});

describe(`State correctly changed by handleRatingChange`, () => {
  const wrapper = mount(shallow(
      <WrappedMockComponent
        store={store}
        match={{params: {id: 1}}}
      />).get(0));
  test(`Valid rating should change reviewIsValid to true`, () => {
    const event = {
      target: {
        value: `1`
      }
    };
    wrapper.instance()._handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(true);
  });

  test(`Invalid rating should change reviewIsValid to false`, () => {
    const event = {
      target: {
        value: ``
      }
    };

    wrapper.instance()._handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(false);
  });
});
