import React from 'react';
import { Box } from '../../../designsystem';
import { GearListingItem } from '../../../components/gear';

import { sampleGearListings, sampleGearListingProps } from './gearItems';
import { list } from '@chakra-ui/core';

interface GearSwapPageProps {}

const GearSwap: React.FC<GearSwapPageProps> = () => {
  return (
    <Box>
      {sampleGearListings.map((listing) => (
        <GearListingItem
          id={listing.id}
          title={listing.title}
          type={listing.type}
          price={listing.price}
          willShip={listing.willShip}
        />
      ))}
    </Box>
  );
};

export default GearSwap;
