import * as React from "react";
import {configure, shallow} from 'enzyme';
import {MovieCardTabs} from "./movie-card-tabs";
import * as Adapter from "enzyme-adapter-react-16";
import {noOperation} from "../../utils";
import {MockCallProperty} from "../../const";
import {CommentType} from "../../types";

configure({adapter: new Adapter()});

const movie = {
  id: 201,
  title: `Django Unchained`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  date: 2012,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8.6,
  scores: 952,
  director: `Floyd Emblow`,
  starring: [`Sally Cullin`, `Harman Kleinstein`, `Chilton Petican`, `Chico Magwood`],
  description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.`,
  videoPreview: `https: //upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 123,
  backgroundColor: `#D8E3E5`,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  isFavorite: true,
};

const comment: CommentType =
  {
    "id": 1,
    "user": {
      "id": 5,
      "name": `Kate Mur`
    },
    "rating": 8.9,
    "comment": `Two detectives, a rookie and a veteran, hunt a serial killer who uses`,
    "date": `2019-05-08T14:13:56.569Z`
  };

const comments = [comment];
const mockEvent = {preventDefault: noOperation, genre: `Romance`};

it(`Component mounting calls onReviewsLoad callback with right data`, () => {

  const onReviewsLoad = jest.fn();
  const onChangeTab = jest.fn();

  shallow(
      <MovieCardTabs
        movie={movie}
        onReviewsLoad={onReviewsLoad}
        activeTab={`active`}
        comments={comments}
        onChangeTab={onChangeTab}
      />
  );

  expect(onReviewsLoad).toHaveBeenCalledTimes(1);

  expect(onReviewsLoad.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatchObject(movie);
});

it(`Tab change calls onChangeTab callback with right data`, () => {

  const onReviewsLoad = jest.fn();
  const onChangeTab = jest.fn();

  const wrapper = shallow(
      <MovieCardTabs
        movie={movie}
        onReviewsLoad={onReviewsLoad}
        activeTab={`Details`}
        comments={comments}
        onChangeTab={onChangeTab}
      />
  );

  wrapper.find(`.movie-nav__link`).at(1).simulate(`click`, mockEvent);

  const tabCurrentValue = wrapper.find(`.movie-nav__link`).at(1).props().children;

  expect(onChangeTab.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatch(tabCurrentValue);
});

