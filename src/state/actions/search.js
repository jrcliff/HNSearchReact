import * as actions from "../actions";

export const addSearchHistory = (searchText, searchResults) => {
  return {
    type: actions.ADD_SEARCH_HISTORY,
    history: searchText,
    currentSearch: searchResults,
  };
};