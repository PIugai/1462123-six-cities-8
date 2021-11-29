import { createSelector } from 'reselect';
import { Offer } from '../../types/offer';
import { Store } from '../../types/store';
import { SortOption } from '../../const';
import { getCurrentCity, getSortOffersBy } from '../../store/app-store/selectors';
import { StoreNameSpace } from '../../store/root-reducer';


export const getOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.Offers].offers;

export const getIsOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.Offers].isOffersLoading;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => city === offer.city.name),
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortOffersBy],
  (offers, sortOffersBy) => {
    const offersCopy = [...offers];

    switch (sortOffersBy) {
      case SortOption.PriceHighToLow:
        return offersCopy.sort((a, b) => b.price - a.price);
      case SortOption.PriceLowToHigh:
        return offersCopy.sort((a, b) => a.price - b.price);
      case SortOption.TopRatedFirst:
        return offersCopy.sort((a, b) => b.rating - a.rating);
      default:
        return offersCopy;
    }
  },
);
