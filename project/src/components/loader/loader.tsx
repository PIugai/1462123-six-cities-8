import ReactLoader from 'react-loader-spinner';

export default function Loader(): JSX.Element {
  return (
    <div className="property__name">
      <ReactLoader type="Puff" color="#4B83C2" height={130} width={130} />
    </div>
  );
}
