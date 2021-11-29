import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeOffer, storeAuth } from '../../test-utils/mocks';

import PlaceCard from './place-card';

describe('Component: Card', () => {

  it('should render with altText "Place" ant text "night" in OfferCard.Main', () => {
    const mockStore = configureMockStore();
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <PlaceCard offer={fakeOffer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/Place/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });
});
