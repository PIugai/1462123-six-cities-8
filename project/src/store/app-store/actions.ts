import {
  ActionType,
  ChangeCurrentCityAction,
  RedirectToRouteAction,
  SetSortOffersByAction
} from '../../types/action';
import { AppRoute, CitiesNames, SortOption } from '../../const';

export const changeCurrentCity = (
  currentCity: CitiesNames,
): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

export const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export const setSortOffersBy = (
  sortOption: SortOption,
): SetSortOffersByAction => ({
  type: ActionType.SetSortOffersBy,
  payload: sortOption,
});
