import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeReview, storeAuth } from '../../test-utils/mocks';
import ReviewItem from './reviews-item';

const history = createMemoryHistory();

const mockStore = configureMockStore();

describe('Component: Review', () => {

  it('should render commentText and altText "Reviews avatar"', () => {

    render(
      <Provider store={mockStore(storeAuth)}>
        <Router history={history}>
          <ReviewItem review={fakeReview} />
        </Router>,
      </Provider>,
    );

    expect(screen.getByAltText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
  });
});
