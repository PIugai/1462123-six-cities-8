import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageMain from '../pages/page-main/page-main';
import PageSignIn from '../pages/page-sign-in/page-sign-in';
import PageFavorites from '../pages/page-favorites/page-favorites';
import PageRoom from '../pages/page-room/page-room';
import Page404 from '../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute, AuthorizationStatus } from '../../const';
import PageLoading from '../pages/page-loading/page-loading';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = ({offers, authorizationStatus, isDataLoaded}:State) => ({
  offers,
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers, authorizationStatus, isDataLoaded}: PropsFromRedux): JSX.Element {
  if(!isDataLoaded || isCheckedAuth(authorizationStatus)){
    return <PageLoading />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain offers={offers}/>
        </Route>
        <Route path={AppRoute.SignIn} exact component={PageSignIn} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <PageFavorites offers={offers}/>}
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

export default connector(App);
export { App };
