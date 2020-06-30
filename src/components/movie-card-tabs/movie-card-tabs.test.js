import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabs from "./movie-card-tabs";

const movie = {
  id: 201,
  title: `Django Unchained`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  date: `2012`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8.6,
  scores: 952,
  director: `Floyd Emblow`,
  starring: [`Sally Cullin`, `Harman Kleinstein`, `Chilton Petican`, `Chico Magwood`],
  description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.`,
  videoPreview: `https: //upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `2h 45m`,
  comments: [{
    id: 1,
    user: {
      id: 356,
      name: `Oran Browning`,
    },
    rating: 10,
    comment: ` Django Unchained is superb from start to finish, it's a 2 hour and 45 minute movie yet you're on the edge of your seat, eyes glued to the screen for the whole ride. It's the closest thing to a flawless movie I have ever seen.`,
    date: `March 08, 2015`
  }, {
    id: 2,
    user: {
      id: 192,
      name: `Arman Nast`,
    },
    rating: 8,
    comment: ` Brutally hilarious and quite messy, but a total blast from start to finish`,
    date: `April 20, 2018`
  }, {
    id: 3,
    user: {
      id: 92,
      name: `Gelya Cartmale`,
    },
    rating: 10,
    comment: ` I rarely bother to give reviews after watching a movie. But holy crap this was a good movie. I'm pretty sure it is the best movie I've seen all year.`,
    date: `November 25, 2015`
  }]
};

it(`Movie card tabs component renders`, () => {
  const tree = renderer
    .create(
        <MovieCardTabs
          movie = {movie}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
