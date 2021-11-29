import { combineReducers } from 'redux';
import { appReducer } from './app-store/app-store';
import { authReducer } from './auth-store/auth-store';
import { offersReducer } from './offers-store/offers-store';
import { nearbyOffersReducer } from './nearby-offers-store/nearby-offers-store';
import { offerReducer } from './offer-store/offer-store';
import { reviewsReducer } from './reviews-store/reviews-store';
import { favoritesReducer } from './favorites-store/favorites-store';

export enum StoreNameSpace {
  App = 'APP',
  Auth = 'AUTH',
  Offers = 'OFFERS',
  NearbyOffers = 'NEARBY_OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  FavoritesOffers = 'FAVORITES_OFFERS',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.App]: appReducer,
  [StoreNameSpace.Auth]: authReducer,
  [StoreNameSpace.Offers]: offersReducer,
  [StoreNameSpace.NearbyOffers]: nearbyOffersReducer,
  [StoreNameSpace.Offer]: offerReducer,
  [StoreNameSpace.Reviews]: reviewsReducer,
  [StoreNameSpace.FavoritesOffers]: favoritesReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
