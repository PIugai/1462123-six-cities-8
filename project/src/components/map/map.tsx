import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, Location } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: Location,
  offers: Offer[],
  idActiveOffer?: number | null;
  className?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, idActiveOffer, className} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markersGroup = new LayerGroup();
    if (map) {

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            idActiveOffer !== null && offer.id === idActiveOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          );
        markersGroup.addLayer(marker);
      });
      markersGroup.addTo(map);
    }
    return () => {
      markersGroup.remove();
    };
  }, [map, offers, idActiveOffer]);

  return <section ref={mapRef} className={`${className}__map map`}></section>;
}

export default Map;
