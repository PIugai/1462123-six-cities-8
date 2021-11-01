import {Offer} from '../types/offer';

const OFFERS: Offer[] = [
  {
    id: 0,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    rating: 4.8,
  },
  {
    id: 1,
    previewImage: 'img/room.jpg',
    price: 120,
    title: 'Wood and stone place',
    type: 'room',
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    rating: 4.5,
  },
  {
    id: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    isPremium: false,
    isFavorite: true,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    rating: 2.8,
  },
  {
    id: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    isPremium: true,
    isFavorite: true,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    rating: 2.8,
  },
];

export default OFFERS;
