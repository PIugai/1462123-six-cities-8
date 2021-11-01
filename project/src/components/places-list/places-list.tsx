import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlacesListProps = {
  offers: Offer[],
  setIdActiveOffer?: (a: number|null) => void;
  isPageRoomPlacesList?: boolean,
}

function PlacesList({offers, setIdActiveOffer, isPageRoomPlacesList}: PlacesListProps): JSX.Element {

  return (
    <div className={isPageRoomPlacesList ? 'near-places__list places__list' : 'cities__places-list places__list tabs content'}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setIdActiveOffer={setIdActiveOffer}/>
      ))}
    </div>
  );

}

export default PlacesList;
