import React from 'react';
import {
  Box,
  Flex,
  Center,
  useColorModeValue,
  Spacer,
  Button,
  Link,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../App.js';

import Hamburger from './Hamburger';

const Navbar = props => {
  const bg = useColorModeValue('blue.600', 'yellow.200');
  return (
    <Flex px="20" py="10" w="100%" {...props}>
      <Button
        fontSize="xl"
        fontWeight="700"
        mr={10}
        // colorScheme={bg}
        variant="ghost"
        borderWidth="2px"
        borderColor={bg}
        size="md"
      >
        Resume
      </Button>
      <Spacer />
      <Center>
        {/* <Hamburger mr={10} /> */}
        <Link fontSize="2xl" fontWeight={700} mr={10}>
          About
        </Link>
        <Link fontSize="2xl" fontWeight={700} mr={10}>
          Projects
        </Link>
        <Link fontSize="2xl" fontWeight={700} mr={10}>
          Work
        </Link>
        <ColorModeSwitcher />
      </Center>
    </Flex>
  );
};

export default Navbar;
