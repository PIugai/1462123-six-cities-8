import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function Page404(): JSX.Element {
  return (
    <main className="page__main page-404">
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </main>
  );
}

export default Page404;
