import { useMemo } from 'react';
import { Review } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

const MAX_REVIEWS_AMOUNT = 10;

type ReviewsListProps = {
  reviews: Review[],
}

function ReviewsList ({reviews}:ReviewsListProps): JSX.Element {

  const reviewsListToDisplay = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, MAX_REVIEWS_AMOUNT),
  [reviews]);


  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsListToDisplay.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
