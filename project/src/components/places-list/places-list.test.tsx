import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeOffers, storeAuth } from '../../test-utils/mocks';
import { CitiesNames } from '../../const';
import PlacesList from './places-list';

const mockStore = configureMockStore();

const history = createMemoryHistory();

describe('Component: OffersList', () => {

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <PlacesList currentCity={CitiesNames.Paris} offers={fakeOffers} hasNoOffers={false} />
        </Router>,
      </Provider>,
    );

    const cardOfferElements: HTMLElement[] = screen.getAllByText(/night/i);

    expect(cardOfferElements.length).toBe(fakeOffers.length);
  });

  it('should render correctly, when NoOffers', () => {
    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <PlacesList currentCity={CitiesNames.Paris} offers={[]} hasNoOffers />
        </Router>,
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
