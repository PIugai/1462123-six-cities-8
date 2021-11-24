import Footer from '../../footer/footer';
import Header from '../../header/header';
import OfferCard from '../../place-card/place-card';
import { Offer } from '../../../types/offer';

type PageFavoritesProps = {
  offers: Offer[];
}

type GroupedOffers = Record<string, Offer[]>

function PageFavorites({offers}: PageFavoritesProps):JSX.Element {

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const groupedFavoriteOffers = favoriteOffers.reduce<GroupedOffers>((res, offer) => {
    const { name } = offer.city;
    if (!Object.keys(res).includes(name)) {
      res[name] = [];
    }
    res[name].push(offer);
    return res;
  }, {});

  return (
    <div className="page">
      <Header />
      {(favoriteOffers.length === 0) ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(groupedFavoriteOffers).map(([cityName, cityOffers]) => (
                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="favorites.html">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityOffers.map((offer) => (
                        <OfferCard.Favorite
                          key={offer.id}
                          offer={offer}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default PageFavorites;
