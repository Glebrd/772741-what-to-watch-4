import * as React from "react";
import {configure, shallow} from 'enzyme';
import {CatalogButton} from "./catalog-button";
import * as Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it(`Button click calls onCatalogButtonClick callback`, () => {

  const onCatalogButtonClick = jest.fn();

  const wrapper = shallow(
      <CatalogButton
        onCatalogButtonClick={onCatalogButtonClick}
      />
  );

  wrapper.find(`button.catalog__button`).simulate(`click`);

  expect(onCatalogButtonClick).toHaveBeenCalledTimes(1);
});
