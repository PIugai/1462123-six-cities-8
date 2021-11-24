import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { CitiesNames, SortOption, AuthorizationStatus } from '../const';

const initialState : State = {
  currentCity: CitiesNames.Paris,
  offers: [],
  currentSortOption: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  reviews: [],
  sortOffersBy: SortOption.Popular,
  isCurrentOfferLoading: false,
  isCurrentOfferLoadingError: false,
  isNearbyOffersLoading: false,
  isOffersLoading: false,
  isReviewsLoading: false,
  user: null,
  currentOffer: null,
  nearbyOffers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return {
        ...state, currentCity: action.payload,
      };
    case ActionType.SetSortOffersBy:
      return {
        ...state, sortOffersBy: action.payload,
      };
    case ActionType.LoadOffersComplete:
      return {
        ...state, offers: action.payload, isOffersLoading: false,
      };
    case ActionType.LoadReviewsComplete:
      return {
        ...state, reviews: action.payload, isReviewsLoading: false,
      };
    case ActionType.LoadOffersStart:
      return {
        ...state, isOffersLoading: true,
      };
    case ActionType.LoadReviewsStart:
      return {
        ...state, isReviewsLoading: true,
      };
    case ActionType.LoadCurrentOfferComplete:
      return {
        ...state, currentOffer: action.payload, isCurrentOfferLoading: false,
      };
    case ActionType.LoadCurrentOfferStart:
      return {
        ...state, isCurrentOfferLoading: true, isCurrentOfferLoadingError: false,
      };
    case ActionType.LoadCurrentOfferError:
      return {
        ...state, isCurrentOfferLoadingError: true, isCurrentOfferLoading: false,
      };
    case ActionType.LoadNearbyOffersComplete:
      return {
        ...state, nearbyOffers: action.payload, isNearbyOffersLoading: false,
      };
    case ActionType.LoadNearbyOffersStart:
      return {
        ...state, isNearbyOffersLoading: true,
      };
    case ActionType.LogIn:
      return {
        ...state,
        user: action.payload,
        authorizationStatus: AuthorizationStatus.Auth,
      };
    case ActionType.LogOut:
      return {
        ...state,
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export { reducer };
