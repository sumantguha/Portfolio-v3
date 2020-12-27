import React from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@chakra-ui/react';

const ButtonGroup = ({ props, bg, name }) => {
  const MotionButton = motion.custom(IconButton);
  return (
    <MotionButton
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      mt="10"
      size="lg"
      p="5"
      colorScheme={bg}
      fontSize="30px"
      icon={name}
      mr="2rem"
      variant="outline"
      {...props}
    />
  );
};

export default ButtonGroup;
