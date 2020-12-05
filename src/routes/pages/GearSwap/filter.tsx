import React from 'react';
import {
  AddIcon,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Row,
} from '../../../designsystem';

interface GearItemFilterBarProps {
  setFilterType: (args: any) => void;
  setPriceRange: (args: any) => void;
  setHideLocal: (args: any) => void;
  setShowGearListingForm: (args: boolean) => void;
}

const GearItemFilterBar: React.FC<GearItemFilterBarProps> = ({
  setFilterType,
  setPriceRange,
  setHideLocal,
  setShowGearListingForm,
}) => {
  return (
    <Row mx={6}>
      <Box width='100%'>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} mx={3}>
            Type
          </MenuButton>
          <MenuList minWidth='240px' boxShadow='1px 1px 2px #999999'>
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
          <MenuList minWidth='240px' boxShadow='1px 1px 2px #999999'>
            <MenuOptionGroup
              defaultValue='all'
              type='radio'
              onChange={(price) => {
                // @ts-ignore
                setPriceRange(price.toString().split(','));
              }}
            >
              <MenuItemOption value='0, 10000'>All</MenuItemOption>
              <MenuItemOption value='0,100'>$0 - $100</MenuItemOption>
              <MenuItemOption value='101,301'>$101 - $300</MenuItemOption>
              <MenuItemOption value='301,500'>$301 - $500</MenuItemOption>
              <MenuItemOption value='501,750'>$501 - $750</MenuItemOption>
              <MenuItemOption value='751,1000'>$751 - $1000</MenuItemOption>
              <MenuItemOption value='1000'>$1000 +</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} mx={3}>
            Shipping?
          </MenuButton>
          <MenuList minWidth='240px' boxShadow='1px 1px 2px #999999'>
            <MenuOptionGroup
              defaultValue='will-ship'
              type='radio'
              onChange={(willShip) => {
                willShip === 'will-ship'
                  ? setHideLocal(true)
                  : setHideLocal(false);
              }}
            >
              <MenuItemOption value='will-ship'>Willing To Ship</MenuItemOption>
              <MenuItemOption value='will-not-ship'>All</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
      <Button
        leftIcon={<AddIcon />}
        onClick={() => setShowGearListingForm(true)}
      >
        Add an Item
      </Button>
    </Row>
  );
};

export default GearItemFilterBar;
