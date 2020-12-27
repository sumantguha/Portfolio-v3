import React from 'react';
import {
  Box,
  useDisclosure,
  Image,
  Heading,
  Icon,
  Badge,
  useColorModeValue,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

import { FaChevronCircleRight } from 'react-icons/fa';

import ContentModal from './ContentModal';
import { motion } from 'framer-motion';

const blink = keyframes`
  50% {
    opacity: 0.0;
  }`;

const Card = ({
  mr,
  mb,
  name,
  start,
  end,
  description,
  image,
  size,
  descriptionSize,
  newPost,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${blink} infinite 1s ease`;

  const MotionBox = motion.custom(Box);
  const scheme = useColorModeValue('purple', 'yellow');
  return (
    <Box>
      <Box mr={mr} mb={mb}>
        <MotionBox
          onClick={handleOpen}
          role="group"
          position="relative"
          textAlign="left"
          color="white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            _groupHover={{ filter: 'brightness(0.3)' }}
            borderRadius={20}
            src={image}
            maxH="90vh"
          />
          <Box p="7" fontSize="5xl" position="absolute" top={0} left={0}>
            <Heading
              className="head"
              textTransform="uppercase"
              letterSpacing="0.2rem"
              fontSize={descriptionSize}
              fontWeight="300"
            >
              {start} {end === null ? '' : `- ${end}`}
            </Heading>
            <Heading pt="2" fontSize={size}>
              {name}
            </Heading>
            <Heading
              pt={size === '5xl' ? 4 : 3}
              textTransform="uppercase"
              letterSpacing="0.2rem"
              fontSize={descriptionSize}
              fontWeight="300"
            >
              {description}
            </Heading>

            <Box position="relative" w="100%">
              {newPost && (
                <Badge
                  position="fixed"
                  top={7}
                  right={7}
                  fontSize="md"
                  colorScheme={scheme}
                  fontWeight={700}
                  visibility="hidden"
                  _groupHover={{ visibility: 'visible' }}
                >
                  New
                </Badge>
              )}
            </Box>

            <Heading
              // position="fixed"
              // bottom={0}
              // left={0}
              py={7}
              letterSpacing="0.1rem"
              fontSize={descriptionSize}
              visibility="hidden"
              _groupHover={{ visibility: 'visible' }}
            >
              Learn More{' '}
              <Icon
                lineHeight="xl"
                animation={animation}
                as={FaChevronCircleRight}
              />
            </Heading>
          </Box>
        </MotionBox>
      </Box>
      <ContentModal
        mx={10}
        onClose={onClose}
        isOpen={isOpen}
        title={name}
        description={description}
        start={start}
        end={end}
      />
    </Box>
  );
};

export default Card;
