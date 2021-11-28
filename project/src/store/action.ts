import { Review } from '../types/review';
import { User } from '../types/user';
import { Offer } from '../types/offer';
import {
  ActionType,
  ChangeCurrentCityAction,
  SetSortOffersByAction,
  LoadOffersStartAction,
  LoadOffersCompleteAction,
  LoadReviewsCompleteAction,
  LoadReviewsStartAction,
  LoadCurrentOfferCompleteAction,
  LoadCurrentOfferStartAction,
  LoadCurrentOfferErrorAction,
  LoadNearbyOffersCompleteAction,
  LoadNearbyOffersStartAction,
  LogInAction,
  LogOutAction,
  RedirectToRouteAction,
  SetReviewPostStatusAction
} from '../types/action';
import {
  CitiesNames,
  SortOption,
  AppRoute,
  ReviewPostStatus
} from '../const';

export const changeCurrentCity = (currentCity: CitiesNames): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

export const setSortOffersBy = (sortOption: SortOption): SetSortOffersByAction => ({
  type: ActionType.SetSortOffersBy,
  payload: sortOption,
});

export const loadOffersComplete = (offers: Offer[]): LoadOffersCompleteAction => ({
  type: ActionType.LoadOffersComplete,
  payload: offers,
});

export const loadReviewsComplete = (reviews: Review[]): LoadReviewsCompleteAction => ({
  type: ActionType.LoadReviewsComplete,
  payload: reviews,
});

export const loadOffersStart = (): LoadOffersStartAction => ({
  type: ActionType.LoadOffersStart,
});

export const loadReviewsStart = (): LoadReviewsStartAction  => ({
  type: ActionType.LoadReviewsStart,
});

export const loadCurrentOfferComplete = (currentOffer: Offer): LoadCurrentOfferCompleteAction => ({
  type: ActionType.LoadCurrentOfferComplete,
  payload: currentOffer,
});

export const loadCurrentOfferStart = (): LoadCurrentOfferStartAction => ({
  type: ActionType.LoadCurrentOfferStart,
});

export const loadCurrentOfferError = (): LoadCurrentOfferErrorAction => ({
  type: ActionType.LoadCurrentOfferError,
});

export const loadNearbyOffersComplete = (nearbyOffers: Offer[]): LoadNearbyOffersCompleteAction => ({
  type: ActionType.LoadNearbyOffersComplete,
  payload: nearbyOffers,
});

export const loadNearbyOffersStart = (): LoadNearbyOffersStartAction => ({
  type: ActionType.LoadNearbyOffersStart,
});

export const logIn = (user: User): LogInAction => ({
  type: ActionType.LogIn,
  payload: user,
});

export const logOut = (): LogOutAction => ({
  type: ActionType.LogOut,
});

export const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export const setReviewPostStatus = (reviewPostStatus: ReviewPostStatus): SetReviewPostStatusAction => ({
  type: ActionType.SetReviewPostStatus,
  payload: reviewPostStatus,
});
