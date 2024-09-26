import React from 'react';
import './Navbar.css';
import { Box, Flex, Spacer, Image, Button, Stack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div id='navbar'>
      <Box bg='blue.800' textAlign='center' w='100%' p={2} color='white' fontSize="xl">
        Worldwide Shipping - Duties and Taxes Prepaid
      </Box>
      <Flex p='20px' w='100%'>
        <Image w='20%' src='https://hebronnutrition.com/cdn/shop/files/hebronnutrition_logo_84813b39-ab50-4e55-a187-dd448cecd02e_449x60.png?v=1623784594' alt='Logo' />
        <Spacer />
        <Stack direction='row' spacing={10} align='center' w='100%'>
          <Button colorScheme='black' variant='link'>
            Home
          </Button>
          <Button colorScheme='black' variant='link'>
            Shop by brand
          </Button>
          <Menu>
            <MenuButton>
              Shop by category
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme='black' variant='link'>
            Meet us CMO
          </Button>
          <Button colorScheme='black' variant='link'>
            Contact us
          </Button>
        </Stack>
        <Spacer />
        <Stack direction='row' spacing={10} align='center'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </Stack>
      </Flex>
    </div>
  );
};
