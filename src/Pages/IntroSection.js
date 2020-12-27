import React, { useState } from 'react';
import { useColorModeValue, Box, Heading, Text } from '@chakra-ui/react';
import ButtonGroup from '../Components/ButtonGroup';
import { useSpring, animated } from 'react-spring';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMailBulk,
} from 'react-icons/fa';

const IntroSection = props => {
  const [isBooped, setIsBooped] = useState(false);
  const bg = useColorModeValue('blue', 'yellow');
  const color = useColorModeValue('blue.600', 'yellow.200');
  const highlightColor = useColorModeValue('red.500', 'blue.200');
  return (
    <Box>
      <Box maxW="100%" {...props}>
        <Box mb="4">
          <Heading fontSize="8xl" color={color}>
            Creating and developing{' '}
            <Text display="inline-block" color={highlightColor}>
              high quality
            </Text>{' '}
            content for the internet world
          </Heading>
        </Box>
        <Box mt="4">
          <Text
            textTransform="uppercase"
            letterSpacing="0.2rem"
            fontSize="xl"
            fontWeight="400"
          >
            Sumant Guha
          </Text>
        </Box>
      </Box>
      <Box w="100%" textAlign="center">
        <ButtonGroup bg={bg} name={<FaFacebookF />} />
        <ButtonGroup bg={bg} name={<FaLinkedinIn />} />
        <ButtonGroup bg={bg} name={<FaGithub />} />
        <ButtonGroup bg={bg} name={<FaMailBulk />} />
      </Box>
    </Box>
  );
};

export default IntroSection;
