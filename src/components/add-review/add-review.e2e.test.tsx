import * as React from "react";
import {configure, shallow} from 'enzyme';
import {AddReview} from "./add-review";
import * as Adapter from "enzyme-adapter-react-16";
import {MovieType} from "../../types";
import {noOperation} from "../../utils";
import {MockCallProperty} from "../../const";

configure({adapter: new Adapter()});

const movie: MovieType = {
  id: 19,
  title: `Mindhunter`,
  picture: `img/mindhunter.jpg `,
  genre: `Crime`,
  date: 2008,
  poster: `img/mindhunter.jpg `,
  background: `img/mindhunter.jpg `,
  rating: 7.8,
  scores: 318,
  director: `Fabien Moorton`,
  starring: [`Peggie Deverick`, `Homere Bruna`, `Lee Chandlar`],
  description: `Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 123,
  backgroundColor: `#D8E3E5`,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  isFavorite: true,
};

it(`Changing rating calls onRatingChange with correct data`, () => {
  const onRatingChange = jest.fn();

  const mockEvent = {
    target: {value: 3},
  };

  const screen = shallow(<AddReview
    currentMovie={movie}
    onRatingChange={onRatingChange}
    onReviewChange={noOperation}
    onSubmit={noOperation}
    ratingIsValid={true}
    reviewIsValid={true}
    isLoading={false}
    networkError={false}
  />);

  const ratingInputs = screen.find(`input`);
  const ratingOne = ratingInputs.at(0);

  ratingOne.simulate(`change`, mockEvent);

  expect(onRatingChange).toHaveBeenCalledTimes(1);

  expect(onRatingChange.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatchObject(mockEvent);
});
