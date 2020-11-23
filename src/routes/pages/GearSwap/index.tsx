import React from 'react';
import { chunk } from 'lodash';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Row,
  Text,
} from '../../../designsystem';
import { GearListingItem } from '../../../components/gear';

import { sampleGearListings, sampleGearListingProps } from './gearItems';

interface GearSwapPageProps {}

const GearSwap: React.FC<GearSwapPageProps> = () => {
  let [filterType, setFilterType] = React.useState('guitar');

  let filteredListings = sampleGearListings.filter(
    (listing) => (listing.type = filterType)
  );

  return (
    <>
      <Row>
        <Box width='100%'>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} mx={3}>
              Type
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup
                defaultValue='all'
                type='radio'
                onChange={(type) => {
                  setFilterType(type.toString());
                }}
              >
                <MenuItemOption value='all'>All</MenuItemOption>
                <MenuItemOption value='guitar'>Guitar</MenuItemOption>
                <MenuItemOption value='bass'>Bass</MenuItemOption>
                <MenuItemOption value='amp'>Amp</MenuItemOption>
                <MenuItemOption value='pedal'>Pedal</MenuItemOption>
                <MenuItemOption value='drums'>Drums</MenuItemOption>
                <MenuItemOption value='other'>Other</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} mx={3}>
              Price Range
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup defaultValue='all' type='radio'>
                <MenuItemOption value='all'>All</MenuItemOption>
                <MenuItemOption value='0-100'>$0 - $100</MenuItemOption>
                <MenuItemOption value='101-301'>$101 - $300</MenuItemOption>
                <MenuItemOption value='301-500'>$301 - $500</MenuItemOption>
                <MenuItemOption value='501-750'>$501 - $750</MenuItemOption>
                <MenuItemOption value='751-1000'>$751 - $1000</MenuItemOption>
                <MenuItemOption value='1000+'>$1000 +</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} mx={3}>
              Shipping
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup defaultValue='will-ship' type='radio'>
                <MenuItemOption value='will-ship'>Will Ship</MenuItemOption>
                <MenuItemOption value='will-not-ship'>
                  Will Not Ship
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
      </Row>
      <Row>
        <Box width='100%'>
          {chunk(filteredListings, 4).map((chunkedSampleGearListings) => (
            <Row my={6} width='100%'>
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
          ))}
        </Box>
      </Row>
    </>
  );
};

export default GearSwap;
