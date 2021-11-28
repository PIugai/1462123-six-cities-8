import { CitiesNames, SortOption, AuthStatus, ReviewPostStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';
import { User } from './user';
import { RootStore } from '../store/root-reducer';

export type AppStore = {
  currentCity: CitiesNames,
  sortOffersBy: SortOption,
}

export type OffersStore = {
  offers: Offer[],
  isOffersLoading: boolean,
}

export type NearbyOffersStore = {
  nearbyOffers: Offer[],
  isNearbyOffersLoading: boolean,
}

export type OfferStore = {
  currentOffer: Offer | null,
  isCurrentOfferLoading: boolean,
  isCurrentOfferLoadingError: boolean,
}

export type ReviewsStore = {
  reviews: Review[],
  isReviewsLoading: boolean,
  reviewPostStatus : ReviewPostStatus,
}

export type AuthStore = {
  authStatus: AuthStatus,
  user: User | null,
}

export type FavoritesStore = {
  favoritesOffers: Offer[],
  isFavoriteOffersLoading: boolean,
}

export type Store = RootStore;
