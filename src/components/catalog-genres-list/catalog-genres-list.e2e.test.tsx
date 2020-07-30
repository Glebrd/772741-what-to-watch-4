import * as React from "react";
import {configure, shallow} from 'enzyme';
import {CatalogGenresList} from "./catalog-genres-list";
import * as Adapter from "enzyme-adapter-react-16";
import {noOperation} from "../../utils";
import {MockCallProperty} from "../../const";

configure({adapter: new Adapter()});

const currentGenre = `All genres`;
const genres = new Set([`Drams`, `Sci-Fi`, `Romance`]);
const activeTab = `All genres`;

const mockEvent = {preventDefault:noOperation ,genre: `Romance`}

it(`Genre change calls onChangeTab callback with right data`, () => {

  const onChangeTab = jest.fn();
  const onGenreChange = jest.fn();

  const wrapper = shallow(
    <CatalogGenresList
      currentGenre={currentGenre}
      genres={genres}
      onChangeTab={onChangeTab}
      onGenreChange={onGenreChange}
      activeTab={activeTab}
    />
  );

  wrapper.find(`.catalog__genres-link`).at(1).simulate(`click`, mockEvent);

  expect(onChangeTab).toHaveBeenCalledTimes(1);

  const genreCurrentValue = wrapper.find(`.catalog__genres-link`).at(1).props().children;
  expect(onChangeTab.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatch(genreCurrentValue);
});

it(`Genre change calls onGenreChange callback with right data`, () => {

  const onChangeTab = jest.fn();
  const onGenreChange = jest.fn();

  const wrapper = shallow(
    <CatalogGenresList
      currentGenre={currentGenre}
      genres={genres}
      onChangeTab={onChangeTab}
      onGenreChange={onGenreChange}
      activeTab={activeTab}
    />
  );

  wrapper.find(`.catalog__genres-link`).at(1).simulate(`click`, mockEvent);
  expect(onGenreChange).toHaveBeenCalledTimes(1);
  const genreCurrentValue = wrapper.find(`.catalog__genres-link`).at(1).props().children;
  expect(onChangeTab.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatch(genreCurrentValue);
});

