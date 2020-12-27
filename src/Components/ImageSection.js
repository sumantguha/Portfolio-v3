import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import me from '../images/me.png';

const ImageSection = props => {
  return (
    <Box {...props}>
      <Image
        position="absolute"
        maxH="80vh"
        maxW="100%"
        right={0}
        bottom={0}
        src={me}
        alt="Sumant Guha"
        objectFit="cover"
        userdrag="none"
        userSelect="none"
      />
    </Box>
  );
};

export default ImageSection;
