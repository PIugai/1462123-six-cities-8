import { Review } from '../../types/review';
import { getRatingInStars } from '../../utils';

type ReviewsItemProps = {
  review: Review,
}

const formatDateDisplayValue = (date: string) => new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long'});
const formatDateAttribute = (date: string) => new Date(date).toLocaleDateString('en-CA');

function ReviewItem ({review}:ReviewsItemProps): JSX.Element {

  return (
    <li className="reviews__item" key={review.user.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInStars(review.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time
          className="reviews__time"
          dateTime={formatDateAttribute(review.date)}
        >
          {formatDateDisplayValue(review.date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
