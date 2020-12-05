import React from 'react';
import { chunk } from 'lodash';
import { Box, Card, Row, useDisclosure } from '../../../designsystem';
import { GearListingItem } from '../../../components/gear';
import GearListingItemForm from '../GearSwap/gearListingForm';
import GearItemFilterBar from '../GearSwap/filter';

import { sampleGearListings } from './gearItems';

interface GearSwapPageProps {}

const GearSwap: React.FC<GearSwapPageProps> = () => {
  let [filterType, setFilterType] = React.useState('all');
  let [priceRange, setPriceRange] = React.useState([0, 1000000]);
  let [hideLocal, setHideLocal] = React.useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let filteredbyTypeListings = sampleGearListings.filter((listing) =>
    filterType !== 'all' ? listing.type === filterType : listing
  );

  let filteredByPriceListings = filteredbyTypeListings.filter(
    (listing) =>
      listing.price >= priceRange[0] && listing.price <= priceRange[1]
  );

  let filteredByShippingListings = filteredByPriceListings.filter((listing) =>
    hideLocal ? listing.willShip === true : listing
  );

  return (
    <>
      <Card header='Gear Swap'>
        <GearItemFilterBar
          setFilterType={setFilterType}
          setPriceRange={setPriceRange}
          setHideLocal={setHideLocal}
          setShowGearListingForm={onOpen}
        />
        <Row>
          <Box width='100%'>
            {chunk(filteredByShippingListings, 4).map(
              (chunkedSampleGearListings, i) => (
                <Row my={6} width='100%' key={i}>
                  {chunkedSampleGearListings.map(
                    ({ id, title, type, price, willShip, imageURL }) => (
                      <GearListingItem
                        key={id}
                        id={id}
                        title={title}
                        type={type}
                        price={price}
                        willShip={willShip}
                        imageURL={imageURL}
                      />
                    )
                  )}
                </Row>
              )
            )}
          </Box>
        </Row>
      </Card>

      <GearListingItemForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default GearSwap;
