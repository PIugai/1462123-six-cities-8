import { State } from '../types/state';
import { Actions } from '../types/action';
import OFFERS from '../mocks/offers';
import { CitiesNames, SortOption, ActionType } from '../const';

const getOffersInCurrentCity = (cityName:string) => OFFERS.slice().filter((offer) => offer.city.name === cityName);

const initialState : State = {
  currentCity: CitiesNames.Paris,
  offers: getOffersInCurrentCity(CitiesNames.Paris),
  currentSortOption: SortOption.Popular,
};

const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetOffers: {
      return {...state, offers: getOffersInCurrentCity(state.currentCity)};
    }
    case ActionType.SetSortOption: {
      return {...state, currentSortOption: action.payload.currentSortOption};
    }
    default: {
      return state;
    }
  }
};

export { reducer };
