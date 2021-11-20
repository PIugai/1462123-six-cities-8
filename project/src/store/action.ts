import { ActionType, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

const setCity = (CitiesNames:string) => ({
  type: ActionType.SetCity,
  payload: {
    currentCity: CitiesNames,
  },
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers,
  },
} as const);

const setSortOption = (sortOption: string) => ({
  type: ActionType.SetSortOption,
  payload: {
    currentSortOption: sortOption,
  },
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {setCity, setOffers, setSortOption, requireAuthorization, requireLogout};
