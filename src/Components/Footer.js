import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = props => {
  return (
    <Box marginX="auto" w="100%" {...props}>
      <Box textAlign="center" fontSize="xs" pt={2} fontWeight="300">
        <Text>Designed & developed by Sumant Guha</Text>
        <Text>&copy; Crafted with ❤️ in Seattle</Text>
      </Box>
    </Box>
  );
};

export default Footer;
