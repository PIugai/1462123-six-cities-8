import { CitiesNames, SortOption, AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from '../types/review';
import { User } from '../types/user';

type State = {
  currentCity: CitiesNames,
  offers: Offer[],
  currentSortOption: string,
  authorizationStatus: AuthorizationStatus,
  currentOffer: Offer | null,
  nearbyOffers: Offer[],
  reviews: Review[],
  sortOffersBy: SortOption,
  isCurrentOfferLoading: boolean,
  isCurrentOfferLoadingError: boolean,
  isNearbyOffersLoading: boolean,
  isOffersLoading: boolean,
  isReviewsLoading: boolean,
  user: User | null,
}

export type { State };
