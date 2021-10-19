import FavoritesList from '../../favorites-list/favorites-list';
import OFFERS from '../../../mocks/offers';
import {Offer} from '../../../types/offer';

type favoritesProps = {
  offers: Offer[];
}

function PageFavorites({offers}: favoritesProps):JSX.Element {
  const Cities: Set<string> = new Set();
  offers.slice().filter((offer) => offer.isFavorite).forEach((offer) => Cities.add(offer.city.name));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {[...Cities].map((city) => (
              <FavoritesList
                key={`${city}_1`}
                offers={OFFERS}
                city={city}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default PageFavorites;
