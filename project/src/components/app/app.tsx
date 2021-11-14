import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageSignIn from '../pages/page-sign-in/page-sign-in';
import PageFavorites from '../pages/page-favorites/page-favorites';
import PageRoom from '../pages/page-room/page-room';
import Page404 from '../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppProps = {
  offers: Offer[]
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain />
        </Route>
        <Route path={AppRoute.SignIn} exact component={PageSignIn} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
          <PageFavorites offers={offers}/>
        </PrivateRoute>
        <Route path={AppRoute.Room} exact >
          <PageRoom
            offers={offers}
          />
        </Route>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
