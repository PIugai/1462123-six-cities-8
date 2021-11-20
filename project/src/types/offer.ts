type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type OfferFromServer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string
  },
  description: string,
  goods: string[],
  host: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string
  },
  id: number,
  images: string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: Location,
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string
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

export type { Offer, Location, OfferFromServer };
