import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { User } from '../types/user';
import { CitiesNames, SortOption, AppRoute, ReviewPostStatus } from '../const';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export const enum ActionType {
  LogIn = 'user/logIn',
  ChangeCurrentCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  LoadOffersComplete = 'data/loadOffersComplete',
  LoadReviewsComplete = 'data/loadReviewsComplete',
  LoadOffersStart = 'data/loadOffersStart',
  LoadReviewsStart = 'data/loadReviewsStart',
  LoadCurrentOfferComplete = 'data/loadCurrentOfferComplete',
  LoadCurrentOfferStart = 'data/loadCurrentOfferStart',
  LoadCurrentOfferError = 'data/loadCurrentOfferError',
  LoadNearbyOffersComplete = 'data/loadNearbyOffersComplete',
  LoadNearbyOffersStart = 'data/loadNearbyOffersStart',
  LogOut = 'user/logOut',
  RedirectToRoute = 'app/redirectToRoute',
  SetSortOffersBy = 'app/changeSortOption',
  SetReviewPostStatus = 'user/setReviewPostStatus',
}

export type ChangeCurrentCityAction = {
  type: ActionType.ChangeCurrentCity;
  payload: CitiesNames;
};

export type ChangeOffersAction = {
  type: ActionType.ChangeOffers;
  payload: Offer[];
}

export type SetSortOffersByAction = {
  type: ActionType.SetSortOffersBy,
  payload: SortOption,
}

export type LoadOffersCompleteAction = {
  type: ActionType.LoadOffersComplete,
  payload: Offer[],
}

export type LoadReviewsCompleteAction = {
  type: ActionType.LoadReviewsComplete,
  payload: Review[],
}

export type LoadOffersStartAction = {
  type: ActionType.LoadOffersStart,
}

export type LoadReviewsStartAction = {
  type: ActionType.LoadReviewsStart,
}

export type LoadCurrentOfferCompleteAction = {
  type: ActionType.LoadCurrentOfferComplete,
  payload: Offer,
}

export type LoadCurrentOfferStartAction = {
  type: ActionType.LoadCurrentOfferStart,
}

export type LoadCurrentOfferErrorAction = {
  type: ActionType.LoadCurrentOfferError,
}

export type LoadNearbyOffersCompleteAction = {
  type: ActionType.LoadNearbyOffersComplete,
  payload: Offer[],
}

export type LoadNearbyOffersStartAction = {
  type: ActionType.LoadNearbyOffersStart,
}

export type LogInAction = {
  type: ActionType.LogIn,
  payload: User,
}

export type LogOutAction = {
  type: ActionType.LogOut,
}

export type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute,
  payload: AppRoute,
}

export type SetReviewPostStatusAction = {
  type: ActionType.SetReviewPostStatus,
  payload: ReviewPostStatus,
}

export type Actions =
  | LogInAction
  | ChangeCurrentCityAction
  | ChangeOffersAction
  | LoadOffersCompleteAction
  | LoadReviewsCompleteAction
  | LoadOffersStartAction
  | LoadReviewsStartAction
  | LoadCurrentOfferCompleteAction
  | LoadCurrentOfferStartAction
  | LoadCurrentOfferErrorAction
  | LoadNearbyOffersCompleteAction
  | LoadNearbyOffersStartAction
  | LogOutAction
  | RedirectToRouteAction
  | SetSortOffersByAction
  | SetReviewPostStatusAction

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
