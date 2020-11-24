export interface sampleGearListingProps {
  id: number;
  title: string;
  type: string;
  price: number;
  willShip: boolean;
  imageURL: string;
}

export const sampleGearListings = [
  {
    id: 1,
    title: 'Roland JC-120',
    type: 'amp',
    price: 600,
    willShip: true,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Kemper Rack',
    type: 'amp',
    price: 1000,
    willShip: false,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Fender Strat',
    type: 'guitar',
    price: 700,
    willShip: false,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'MXR Phase 90',
    type: 'pedal',
    price: 80,
    willShip: true,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Dean Razorback',
    type: 'guitar',
    price: 760,
    willShip: false,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Fender Jazz Bass',
    type: 'bass',
    price: 320,
    willShip: true,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Pearl Drum Kit',
    type: 'drums',
    price: 600,
    willShip: false,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Gibson Les Paul',
    type: 'guitar',
    price: 900,
    willShip: true,
    imageURL: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Bon Jovi Banjo',
    type: 'other',
    price: 200,
    willShip: false,
    imageURL: 'https://via.placeholder.com/150',
  },
];
