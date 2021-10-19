import {Offer} from '../../types/offer';
import {useHistory} from 'react-router-dom';

type favoriteCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}: favoriteCardProps): JSX.Element {
  const {previewImage, price, title, id} = offer;
  const history = useHistory();
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a onClick={()=> history.push(`/offer/${id}`)}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={()=> history.push(`/offer/${id}`)}>{title}</a>
        </h2>
        <p className="place-card__type">Private room</p>
      </div>
    </article>
  );
}
export default FavoritesCard;