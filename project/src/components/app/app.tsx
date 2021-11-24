import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageSignIn from '../pages/page-sign-in/page-sign-in';
import PageFavorites from '../pages/page-favorites/page-favorites';
import PageRoom from '../pages/page-room/page-room';
import Page404 from '../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute } from '../../const';

const mapStateToProps = ({ offers }: State) => ({
  offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ offers }: PropsFromRedux): JSX.Element {

  return (
    <BrowserRouter>
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
          render={() => <PageFavorites offers={offers}/>}
        >
          <PageFavorites offers={offers}/>
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

export default connector(App);
export { App };
