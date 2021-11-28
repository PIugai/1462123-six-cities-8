import {
  ActionType,
  LoadReviewsCompleteAction,
  LoadReviewsStartAction,
  SetReviewPostStatusAction
} from '../../types/action';
import { Review } from '../../types/review';
import {
  ReviewPostStatus
} from '../../const';

export const loadReviewsComplete = (
  reviews: Review[],
): LoadReviewsCompleteAction => ({
  type: ActionType.LoadReviewsComplete,
  payload: reviews,
});

export const loadReviewsStart = (): LoadReviewsStartAction  => ({
  type: ActionType.LoadReviewsStart,
});

export const setReviewPostStatus = (reviewPostStatus: ReviewPostStatus): SetReviewPostStatusAction => ({
  type: ActionType.SetReviewPostStatus,
  payload: reviewPostStatus,
});
