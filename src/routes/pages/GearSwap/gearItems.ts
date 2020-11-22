export interface sampleGearListingProps {
  id: number;
  title: string;
  type: string;
  price: number;
  willShip: boolean;
}

export const sampleGearListings = [
  {
    id: 1,
    title: 'Roland JC-120',
    type: 'amp',
    price: 600,
    willShip: true,
  },
  {
    id: 2,
    title: 'Kemper Rack',
    type: 'amp',
    price: 1200,
    willShip: false,
  },
  {
    id: 3,
    title: 'Fender Strat',
    type: 'guitar',
    price: 700,
    willShip: false,
  },
  {
    id: 4,
    title: 'MXR Phase 90',
    type: 'guitar pedal',
    price: 80,
    willShip: true,
  },
];
