import { CitiesNames, SortOption } from '../../const';
import { Actions, ActionType } from '../../types/action';
import { AppStore } from '../../types/store';

const initialState: AppStore = {
  currentCity: CitiesNames.Paris,
  sortOffersBy: SortOption.Popular,
};

export const appReducer = (state = initialState, action: Actions): AppStore => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return {
        ...state, currentCity: action.payload,
      };
    case ActionType.SetSortOffersBy:
      return {
        ...state, sortOffersBy: action.payload,
      };
    default:
      return state;
  }
};
