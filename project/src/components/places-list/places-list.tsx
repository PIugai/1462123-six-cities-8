import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlacesListProps = {
  offers: Offer[],
  setIdActiveOffer?: (offer: number|null) => void,
  isRoomScreenOffersList?: boolean,
};

function PlacesList({offers, setIdActiveOffer, isRoomScreenOffersList}: PlacesListProps): JSX.Element {

  return (
    <div className={isRoomScreenOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs content'}>
      {offers.map((offerCard) => <PlaceCard  key={offerCard.id} setIdActiveOffer={setIdActiveOffer} offer={offerCard}/>)}
    </div>
  );
}

export default PlacesList;
