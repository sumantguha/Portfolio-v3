import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Center,
  Heading,
  Link,
  IconButton,
} from '@chakra-ui/react';

import { CgMenu, CgClose } from 'react-icons/cg';

const Hamburger = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  };

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };

  const enableScroll = () => {
    window.onscroll = () => {};
  };

  return (
    <Box {...props}>
      <Collapse in={isOpen} unmountOnExit={true} animateOpacity>
        <Box
          hidden={!isOpen}
          position="absolute"
          top="0"
          left="0"
          w="100%"
          bg="tomato"
          h="100vh"
        >
          <Center h="100vh" w="100%" textAlign="center" color="white">
            <Box>
              <Heading
                textTransform="uppercase"
                letterSpacing="0.2rem"
                fontSize="xl"
                fontWeight="300"
                mb={3}
              >
                Navigate
              </Heading>
              <Link fontWeight="700" pt="2" fontSize="6xl">
                Home
              </Link>
              <br />
              <Link fontWeight="700" pt="2" fontSize="6xl">
                About Me
              </Link>
              <br />
              <Link fontWeight="700" pt="2" fontSize="6xl">
                Projects
              </Link>
              <br />
              <Link fontWeight="700" pt="2" fontSize="6xl">
                Experience
              </Link>
            </Box>
          </Center>
        </Box>
      </Collapse>
      <IconButton
        fontSize="4xl"
        icon={!isOpen ? <CgMenu /> : <CgClose />}
        variant="none"
        onClick={handleOpen}
      />
    </Box>
  );
};

export default Hamburger;
