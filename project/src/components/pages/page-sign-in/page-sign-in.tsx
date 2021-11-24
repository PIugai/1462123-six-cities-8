import { Redirect } from 'react-router';
import { ThunkAppDispatch } from '../../../types/action';
import { AuthData } from '../../../types/auth-data';
import { connect, ConnectedProps } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { FormEvent, useRef } from 'react';
import { logInAction } from '../../../store/api-actions';
import Header from '../../header/header';
import { State } from '../../../types/state';

const validatePassword = (inputValue: string) => {
  if (inputValue.includes(' ')) {
    return 'Password must not include spaces';
  }
  return '';
};

const mapStateToProps = ({ user, authorizationStatus }: State) => ({
  user,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(logInAction(authData));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PageSignIn({ authorizationStatus, onSubmit }: PropsFromRedux): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFieldsChange = (evt: FormEvent<HTMLFormElement>) => {
    if (loginRef.current && passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.Main}/>;
  }


  return (
    <div className="page page--gray page--login">

      <Header showUserBlock={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              onChange={handleFieldsChange}
              className="login__form form"
              action=""
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="user-name"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="login.html">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}

export default connector(PageSignIn);
export { PageSignIn };
