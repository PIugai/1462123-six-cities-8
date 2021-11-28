import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import PageMain from '../components/pages/page-main/page-main';
import PageSignIn from '../components/pages/page-sign-in/page-sign-in';
import PageFavorites from '../components/pages/page-favorites/page-favorites';
import PageRoom from '../components/pages/page-room/page-room';
import Page404 from '../components/pages/page-404/page-404';
import PrivateRoute from '../components/private-route/private-route';
import browserHistory from '../browser-history';
import { AppRoute } from '../const';

function App(): JSX.Element {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <PageSignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <PageFavorites />}
        >
        </PrivateRoute>
        <Route path={`${AppRoute.Room}/:offerId`} exact >
          <PageRoom />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
