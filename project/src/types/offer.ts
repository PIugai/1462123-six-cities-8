type Location = {
  latitude: number,
  longitude: number,
  zoom: number
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

export type { Offer, Location };
