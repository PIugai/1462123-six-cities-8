import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { AuthStatus } from '../../../const';
import { getRatingInStars } from '../../../utils';
import {
  fetchReviewsAction,
  fetchCurrentOfferAction,
  fetchNearbyOffersAction,
  changeFavoriteStatusAction
} from '../../../store/api-actions';
import { getAuthStatus } from '../../../store/auth-store/selectors';
import { updateCurrentOffer } from '../../../store/offer-store/actions';
import {
  getCurrentOffer,
  getIsCurrentOfferLoading,
  getIsCurrentOfferLoadingError
} from '../../../store/offer-store/selectors';
import {
  getIsReviewsLoading,
  getReviews
} from '../../../store/reviews-store/selectors';
import { updateNearbyOffers } from '../../../store/nearby-offers-store/actions';
import {
  getIsNearbyOffersLoading,
  getNearbyOffers
} from '../../../store/nearby-offers-store/selectors';
import Header from '../../header/header';
import OfferCard from '../../offer-card/offer-card';
import OffersMap from '../../offers-map/offers-map';
import Loader from '../../loader/loader';
import Page404 from '../page-404/page-404';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../reviews-form/reviews-form';

const MAX_AMOUNT_IMAGES = 6;

function PageRoom(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  const currentOffer = useSelector(getCurrentOffer);

  const reviews = useSelector(getReviews);

  const nearbyOffers = useSelector(getNearbyOffers);

  const isReviewsLoading = useSelector(getIsReviewsLoading);

  const isCurrentOfferLoading = useSelector(getIsCurrentOfferLoading);

  const isCurrentOfferLoadingError = useSelector(getIsCurrentOfferLoadingError);

  const isNearbyOffersLoading = useSelector(getIsNearbyOffersLoading);

  const dispatch = useDispatch();

  const { offerId } = useParams<{ offerId: string }>();


  const handleOfferFavoriteClick = () => {
    if (currentOffer) {
      dispatch(changeFavoriteStatusAction(
        currentOffer.id,
        currentOffer.isFavorite,
        (updatedOffer) => {
          dispatch(updateCurrentOffer(updatedOffer));
        },
      ));
    }
  };

  const handleNearbyFavoriteClick = (currentOfferId: number, isFavorite: boolean) => {
    dispatch(changeFavoriteStatusAction(
      currentOfferId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateNearbyOffers(updatedOffer));
      },
    ));
  };

  const offers = useMemo(() => {
    if (!currentOffer) {
      return [];
    }
    return [...nearbyOffers, currentOffer];
  }, [currentOffer, nearbyOffers]);


  useEffect(() => {
    dispatch(fetchCurrentOfferAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
  },[dispatch, offerId]);

  const renderPageContent = () => {
    if (isCurrentOfferLoadingError) {
      return <Page404 />;
    }
    if (isCurrentOfferLoading) {
      return <Loader />;
    }
    if (currentOffer) {
      return (
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, MAX_AMOUNT_IMAGES).map((image) => (
                  <div
                    className="property__image-wrapper"
                    key={image}
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))};
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button
                    className={`property__bookmark-button button button
                    ${currentOffer.isFavorite ? 'property__bookmark-button--active' :''}`}
                    type="button"
                    onClick={handleOfferFavoriteClick}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span
                      style={{width: getRatingInStars(currentOffer.rating)}}
                    />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span
                    className="property__rating-value rating__value"
                  >{currentOffer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper
                      ${currentOffer.host.isPro ? 'property__avatar-wrapper--pro' : ''}`}
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host"
                      />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                {isReviewsLoading ? <Loader /> : (
                  <section className="property__reviews reviews">
                    <ReviewsList reviews={reviews} />
                    {authStatus === AuthStatus.Auth && (
                      <ReviewForm offerId={offerId} />
                    )}
                  </section>
                )}
              </div>
            </div>
            {isNearbyOffersLoading ? <Loader /> : (
              <section className="property__map map">
                <OffersMap
                  offers={offers}
                  activeOffer={currentOffer}
                />
              </section>
            )}
          </section>
          {isNearbyOffersLoading ? <Loader /> : (
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  {nearbyOffers.map((nearbyOffer) => (
                    <OfferCard.Offer
                      onFavoriteClick={handleNearbyFavoriteClick}
                      key={nearbyOffer.id}
                      offer={nearbyOffer}
                    />
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>
      );
    }
  };

  return (
    <div className="page">
      <Header />
      {renderPageContent()}
    </div>
  );
}

export default PageRoom;


