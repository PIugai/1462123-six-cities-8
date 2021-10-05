import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageSignIn from '../pages/page-sign-in/page-sign-in';
import PageFavorites from '../pages/page-favorites/page-favorites';
import PageRoom from '../pages/page-room/page-room';
import Page404 from '../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import {Place} from '../../types/place';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppProps = {
  places: Place[]
}

function App({places}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain places={places}/>
        </Route>
        <Route path={AppRoute.SignIn} exact component={PageSignIn} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
          <PageFavorites />
        </PrivateRoute>
        <Route path={AppRoute.Room} exact component={PageRoom} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
