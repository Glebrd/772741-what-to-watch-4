import * as React from "react";
import withTabs from "../../hocs/with-tabs/with-tabs";

const DEFAULT_ACTIVE_ITEM = `All genres`;

interface Props {
  currentGenre: string;
  genres: Set<string>;
  onChangeTab: (genre: string) => {void};
  onGenreChange: (genre: string) => {void};
  activeTab: string;
}

const CatalogGenresList: React.FunctionComponent<Props> = (props: Props) => {
  const {onGenreChange, onChangeTab, activeTab, genres} = props;
  const currentlyActiveTab = activeTab ? activeTab : DEFAULT_ACTIVE_ITEM;
  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => {
        const currentClassName = `catalog__genres-item ${currentlyActiveTab === genre ? `catalog__genres-item--active` : ``}`;
        return (
          <li
            key={genre}
            className={currentClassName}
          >
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeTab(genre);
                onGenreChange(genre);
              }}

            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

export {CatalogGenresList};
export default withTabs(CatalogGenresList);
