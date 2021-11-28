import { ReviewPostStatus } from '../../const';
import { StoreNameSpace } from '../../store/root-reducer';
import { Review } from '../../types/review';
import { Store } from '../../types/store';

export const getReviews = (store: Store): Review[] =>
  store[StoreNameSpace.reviews].reviews;

export const getIsReviewsLoading = (store: Store): boolean =>
  store[StoreNameSpace.reviews].isReviewsLoading;

export const getReviewPostStatus = (store: Store): ReviewPostStatus =>
  store[StoreNameSpace.reviews].reviewPostStatus;
