import OfferCard from '../offer-card/offer-card';
import { OfferCardProps } from '../offer-card/offer-card';

type SpecificOfferCardProps = Pick<OfferCardProps, 'offer' | 'onMouseEnter' | 'onMouseLeave' | 'onFavoriteClick'>;

function PlaceCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageWrapperClassName="cities__image-wrapper"
      rootClassName="cities__place-card"
      {...props}
    />
  );
}

export default PlaceCard;
