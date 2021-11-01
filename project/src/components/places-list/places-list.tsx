import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlacesListProps = {
  offers: Offer[],
  setIdActiveOffer: (a: number|null) => void,
}

function PlacesList({offers, setIdActiveOffer}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setIdActiveOffer={setIdActiveOffer} />
      ))}
    </div>
  );

}

export default PlacesList;
