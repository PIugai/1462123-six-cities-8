import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Place} from './types/place';

const places: Place[] = [
  {
    id: 0,
    image: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    mark: 'Premium',
  },
  {
    id: 1,
    image: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 2,
    image: 'img/apartment-02.jpg',
    price: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 3,
    image: 'img/apartment-03.jpg',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    mark: 'Premium',
  },
  {
    id: 4,
    image: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App places = {places} />
  </React.StrictMode>,
  document.getElementById('root'));
