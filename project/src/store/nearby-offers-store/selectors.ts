import { StoreNameSpace } from '../../store/root-reducer';
import { Offer } from '../../types/offer';
import { Store } from '../../types/store';

export const getNearbyOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.NearbyOffers].nearbyOffers;

export const getIsNearbyOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.NearbyOffers].isNearbyOffersLoading;
