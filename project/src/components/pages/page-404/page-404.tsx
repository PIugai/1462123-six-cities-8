import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <main className="page__main page-404">
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </main>
  );
}

export default Page404;
