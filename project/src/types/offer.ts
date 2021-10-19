export type Offer = {
  id: number,
  title: string;
  previewImage: string,
  price: number,
  type: string,
  isPremium: boolean,
  isFavorite: boolean,
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    }
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
