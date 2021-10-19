import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offer[]
}

function PlacesList({offers}: PlacesListProps): JSX.Element {

  const [, setActiveCard] = useState<number | undefined>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} setActive={setActiveCard}/>
      ))}
    </div>
  );

}

export default PlacesList;
