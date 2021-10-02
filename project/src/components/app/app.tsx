import MainPage from '../main-page/main-page';
import {Place} from '../../types/place';

type AppProps = {
  places: Place[]
}

function App({places}: AppProps): JSX.Element {
  return <MainPage places={places}/>;
}

export default App;
