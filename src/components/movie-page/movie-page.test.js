import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const onCardClick = () => {};
const movies = [];
const movie = {
  title: `Johnny English`,
  picture: `img/johnny-english.jpg`,
  genre: `Comedy`,
  date: `2000`,
  poster: `img/johnny-english.jpg`,
  background: `img/johnny-english.jpg`,
  rating: 8,
  scores: 124,
  director: `Basil Watmough`,
  starring: [`Kellen Screwton`, `Joaquin Brideoke`, `Willie Slyman`],
  description: `Evan Treborn grows up in a small town with his single, working mother and his friends. He suffers from memory blackouts where he suddenly finds himself somewhere else, confused. Evan's friends and mother hardly believe him, thinking he makes it up just to get out of trouble. As Evan grows up he has fewer of these blackouts until he seems to have recovered. Since the age of seven he has written a diary of his blackout moments so he can remember what happens. One day at college he starts to read one of his old diaries, and suddenly a flashback hits him like a brick!`
};

it(`Movie page renders`, () => {
  const tree = renderer
    .create(
        <MoviePage
          onCardClick={onCardClick}
          movies={movies}
          movie={movie}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
