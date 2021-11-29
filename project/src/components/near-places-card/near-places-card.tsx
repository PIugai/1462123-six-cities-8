import OfferCard from '../offer-card/offer-card';
import { OfferCardProps } from '../offer-card/offer-card';

type SpecificOfferCardProps = Pick<OfferCardProps, 'offer' | 'onMouseEnter' | 'onMouseLeave' | 'onFavoriteClick'>;

function NearPlacesCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageWrapperClassName="near-places__image-wrapper"
      rootClassName="near-places__card"
      {...props}
    />
  );
}

export default NearPlacesCard;

