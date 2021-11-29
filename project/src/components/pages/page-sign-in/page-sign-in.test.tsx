import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { storeNoAuth } from '../../../test-utils/mocks';
import PageSignIn from './page-sign-in';

const history = createMemoryHistory();

const mockStore = configureMockStore();

describe('Component: Page-Sign-In', () => {

  it('should render correctly', () => {

    render(
      <Provider store={mockStore(storeNoAuth)}>
        <Router history={history}>
          <PageSignIn />
        </Router>,
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/Email/i), 'rick');
    userEvent.type(screen.getByPlaceholderText(/Password/i), 'qwerty');

    expect(screen.getByDisplayValue(/rick/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
