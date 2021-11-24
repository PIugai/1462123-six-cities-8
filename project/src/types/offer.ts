type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type OfferResponse = Omit<
  Offer,
  | 'host'
  | 'isFavorite'
  | 'isPremium'
  | 'previewImage'
  | 'maxAdults'
  > & {
  host: {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  },
  'is_favorite': boolean,
  'is_premium': boolean,
  'max_adults': number,
  'preview_image': string,
}

type Offer = {
  id: number,
  title: string;
  previewImage: string,
  price: number,
  type: string,
  isPremium: boolean,
  isFavorite: boolean,
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  }
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults: number;
  rating: number;
};

export type { Offer, Location, OfferResponse };
