import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, authorizationStatus, component, children } = props;
  return (
    <Route exact={exact} path={path} component={component}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoute.SignIn} />
      )}
    </Route>
  );
}

export default PrivateRoute;
