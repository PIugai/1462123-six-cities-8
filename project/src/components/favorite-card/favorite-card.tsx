import OfferCard from '../offer-card/offer-card';
import { OfferCardProps, PreviewImgSize } from '../offer-card/offer-card';

type SpecificOfferCardProps = Pick<OfferCardProps, 'offer' | 'onMouseEnter' | 'onMouseLeave' | 'onFavoriteClick'>;

function FavoriteCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageHeight={PreviewImgSize.favorite.height}
      imageWidth={PreviewImgSize.favorite.width}
      imageWrapperClassName="favorites__image-wrapper"
      infoWrapperClassName="favorites__card-info"
      rootClassName="favorites__card"
      {...props}
    />
  );
}

export default FavoriteCard;
