import { StoreNameSpace } from '../../store/root-reducer';
import { Offer } from '../../types/offer';
import { Store } from '../../types/store';

export const getFavoritesOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.FavoritesOffers].favoritesOffers;

export const getIsFavoritesOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.FavoritesOffers].isFavoriteOffersLoading;
