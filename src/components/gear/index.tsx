import React from 'react';
import { Box, Row } from '../../designsystem';

import { sampleGearListingProps } from '../../routes/pages/GearSwap/gearItems';

// Gear Item for Sale
export const GearListingItem: React.FC<sampleGearListingProps> = ({
  id,
  title,
  type,
  price,
  willShip,
}) => {
  return (
    <Box bg='#ffffff'>
      <Row>
        <h1>{title}</h1>
        <p>${price}</p>
      </Row>
      <p>This is a test item</p>
    </Box>
  );
};
