import { Offer } from '../../types/offer';
import { Store } from '../../types/store';
import { StoreNameSpace } from '../../store/root-reducer';

export const getCurrentOffer = (store: Store): Offer | null =>
  store[StoreNameSpace.offer].currentOffer;

export const getIsCurrentOfferLoading = (store: Store): boolean =>
  store[StoreNameSpace.offer].isCurrentOfferLoading;

export const getIsCurrentOfferLoadingError = (store: Store): boolean =>
  store[StoreNameSpace.offer].isCurrentOfferLoadingError;
