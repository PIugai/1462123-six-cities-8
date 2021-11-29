import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { storeAuth, storeNoAuth } from '../../../test-utils/mocks';
import PageMain from './page-main';

const history = createMemoryHistory();

const mockStore = configureMockStore([thunk]);

describe('Component: MainPage', () => {

  describe('has offers', () => {

    it('should render correctly', () => {

      const {container} = render(
        <Provider store={mockStore(storeAuth)}>
          <Router history={history}>
            <PageMain />
          </Router>,
        </Provider>,
      );

      expect(container.querySelector('.cities')).toBeInTheDocument();
    });
  });

  describe('empty', () => {
    it('should render correctly', () => {

      render(
        <Provider store={mockStore(storeNoAuth)}>
          <Router history={history}>
            <PageMain />
          </Router>,
        </Provider>,
      );

      expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    });
  });
});

