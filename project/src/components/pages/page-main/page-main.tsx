import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../../types/state';
import { Actions } from '../../../types/action';
import { CitiesNames, SortOption } from '../../../const';
import { changeCurrentCity } from '../../../store/action';
import Header from '../../header/header';
import Loader from '../../loader/loader';
import PlacesList from '../../places-list/places-list';
import CitiesList from '../../cities-list/cities-list';

const mapStateToProps = ({
  currentCity,
  offers,
  sortOffersBy,
  isOffersLoading,
}: State) => ({
  currentCity,
  offers,
  sortOffersBy,
  isOffersLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange: (city: CitiesNames) => {
    dispatch(changeCurrentCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PageMain(props: PropsFromRedux): JSX.Element {
  const {
    currentCity,
    offers,
    onCityChange,
    sortOffersBy,
    isOffersLoading,
  } = props;

  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);

  switch (sortOffersBy) {
    case SortOption.PriceHighToLow:
      cityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortOption.PriceLowToHigh:
      cityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortOption.TopRatedFirst:
      cityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const hasNoOffers = cityOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header isPageMain />
      <main
        className={`page__main page__main--index ${hasNoOffers ? 'page__main--index-empty' : ''}`}
      >
        <CitiesList
          currentCity={currentCity}
          onCityChange={onCityChange}
        />
        {isOffersLoading ? (
          <Loader />
        ) : (
          <PlacesList
            currentCity={currentCity}
            offers={cityOffers}
            hasNoOffers={hasNoOffers}
          />
        )}
      </main>
    </div>
  );
}

export { PageMain };

export default connector(PageMain);
