import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { getRatingInStars } from '../../utils';

export const PreviewImgSize = {
  default: {
    height: '200',
    width: '260',
  },
  favorite: {
    height: '110',
    width: '150',
  },
};

export type OfferCardProps = {
  offer: Offer,
  rootClassName: string,
  imageWrapperClassName: string,
  infoWrapperClassName?: string,
  imageWidth?: string,
  imageHeight?: string,
  onMouseEnter?: (offerData: Offer) => void,
  onMouseLeave?: () => void,
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void,
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const {
    offer,
    rootClassName = '',
    imageWrapperClassName = '',
    infoWrapperClassName = '',
    imageHeight = PreviewImgSize.default.height,
    imageWidth = PreviewImgSize.default.width,
    onMouseEnter,
    onMouseLeave,
    onFavoriteClick,
  } = props;

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(offer);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  const handleFavoriteClick = () => {
    onFavoriteClick && onFavoriteClick(offer.id, offer.isFavorite);
  };

  return (
    <article
      className={`place-card ${rootClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark"><span>Premium</span></div>
      )}
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width={imageWidth}
          height={imageHeight}
          alt="Place"
        />
      </div>
      <div className={`place-card__info ${infoWrapperClassName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{offer.price}
            </b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            onClick={handleFavoriteClick}
            className={`place-card__bookmark-button button
            ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInStars(offer.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
