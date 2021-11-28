import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/auth-store/selectors';
import { History } from 'history';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;

  const authStatus = useSelector(getAuthStatus);

  if (authStatus !== AuthStatus.Auth) {
    return <Redirect to={AppRoute.SignIn}/>;
  }

  return  (
    <Route
      exact={exact}
      path={path}
      render={render}
    />
  );
}

export default PrivateRoute;
