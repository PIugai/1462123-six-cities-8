import { useState } from 'react';
import { Offer } from '../../types/offer';
import  SortOffers  from '../sort-offers/sort-offers';
import OfferCard from '../place-card/place-card';
import Map from '../offers-map/offers-map';
import NoOffers from '../no-offers/no-offers';

type OffersListProps = {
  currentCity: string,
  offers: Offer[],
  hasNoOffers: boolean,
}

function PlacesList({currentCity, offers, hasNoOffers}: OffersListProps): JSX.Element {

  const [hoveredOffer, setHoveredOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = (offer: Offer) => (
    setHoveredOffer(offer)
  );

  const handleOfferMouseLeave = () => (
    setHoveredOffer(null)
  );

  return (
    <div className="cities">
      <div
        className={`cities__places-container container ${hasNoOffers ? 'cities__places-container--empty' : ''}`}
      >
        {hasNoOffers ? (
          <NoOffers currentCity={currentCity} />
        ) : (
          <>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {currentCity}
              </b>
              <SortOffers />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <OfferCard.Main
                    key={offer.id}
                    offer={offer}
                    onMouseEnter={handleOfferMouseEnter}
                    onMouseLeave={handleOfferMouseLeave}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeOffer={hoveredOffer} />
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PlacesList;
