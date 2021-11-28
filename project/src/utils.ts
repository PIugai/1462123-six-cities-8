import { CitiesNames } from './const';
import { Offer, OfferResponse } from './types/offer';
import { Review, ReviewResponse } from './types/review';
import { User, UserResponse } from './types/user';

const ONE_STAR_RATING_PERCENT = 20;

const getRatingInStars = (rating: number): string => `${Math.round(rating) * ONE_STAR_RATING_PERCENT}%`;

const adaptOfferToClient = (offerData: OfferResponse): Offer => ({
  bedrooms: offerData.bedrooms,
  city: {
    name: offerData.city.name,
    location: {
      latitude: offerData.city.location.latitude,
      longitude: offerData.city.location.longitude,
      zoom: offerData.city.location.zoom,
    },
  },
  description: offerData.description,
  goods: offerData.goods,
  host: {
    id: offerData.host.id,
    name: offerData.host.name,
    avatarUrl: offerData.host.avatar_url,
    isPro: offerData.host.is_pro,
  },
  id: offerData.id,
  images: offerData.images,
  isFavorite: offerData.is_favorite,
  isPremium: offerData.is_premium,
  location: {
    latitude: offerData.location.latitude,
    longitude: offerData.location.longitude,
    zoom: offerData.location.zoom,
  },
  maxAdults: offerData.max_adults,
  previewImage: offerData.preview_image,
  price: offerData.price,
  title: offerData.title,
  type: offerData.type,
  rating: offerData.rating,
});

const adaptReviewToClient = (reviewData: ReviewResponse): Review => ({
  id: reviewData.id,
  user: {
    id: reviewData.user.id,
    isPro: reviewData.user.is_pro,
    name: reviewData.user.name,
    avatarUrl: reviewData.user.avatar_url,
  },
  rating: reviewData.rating,
  comment: reviewData.comment,
  date: reviewData.date,
});

const adaptUserToClient = (userData: UserResponse): User => ({
  avatarUrl: userData.avatar_url,
  email: userData.email,
  id: userData.id,
  isPro: userData.is_pro,
  name: userData.name,
  token: userData.token,
});

const getRandomCity = (arr: CitiesNames[]): CitiesNames => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export { getRatingInStars, adaptOfferToClient, adaptReviewToClient, adaptUserToClient, getRandomCity};
