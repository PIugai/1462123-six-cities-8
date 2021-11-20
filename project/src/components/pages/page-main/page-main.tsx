import { useState } from 'react';
import CitiesList from '../../cities-list/cities-list';
import Logo from '../../logo/logo';
import PlacesList from '../../places-list/places-list';
import Map from '../../map/map';
import { connect, ConnectedProps} from 'react-redux';
import { State } from '../../../types/state';
import { Link } from 'react-router-dom';
import Sort from '../../sort/sort';
import { Offer } from '../../../types/offer';
import { AppRoute, SortOption } from '../../../const';

const getCitiesCoordinates = (city:string) => {
  switch(city){
    case 'Paris':{
      return {latitude: 48.8534,longitude: 2.3488,zoom: 10};
    }
    case 'Amsterdam':{
      return {latitude: 52.3909553943508,longitude: 4.85309666406198,zoom: 10};
    }
    default :{
      return {latitude: 52.3909553943508,longitude: 4.85309666406198,zoom: 10};
    }
  }
};

type PageMainProps = {
  offers: Offer[],
}

const getSortedOffers = (currentSortOption : string, offers: Offer[]) => {
  switch(currentSortOption){
    case SortOption.PriceHighToLow: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortOption.PriceLowToHigh: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortOption.TopRatedFirst: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

const mapStateToProps = ({currentCity, currentSortOption}:State) => ({
  currentCity,
  currentSortOption,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PageMainProps;

function PageMain({offers, currentCity, currentSortOption}: ConnectedComponentProps): JSX.Element {
  const [idActiveOffer, setIdActiveOffer] = useState<null | number>(null);
  const sortedOffers = getSortedOffers(currentSortOption, offers);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <Sort/>
              <PlacesList offers={sortedOffers} setIdActiveOffer={setIdActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <Map city={getCitiesCoordinates(currentCity)} offers={offers} className='cities' idActiveOffer={idActiveOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(PageMain);
