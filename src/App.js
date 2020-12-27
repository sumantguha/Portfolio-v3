import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  extendTheme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import AnimatedCursor from 'react-animated-cursor';

import { FaMoon, FaSun } from 'react-icons/fa';

import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import AboutMe from './Pages/AboutMe';
import Navbar from './Components/Navbar';
import IntroSection from './Pages/IntroSection';
import Footer from './Components/Footer';
import ParticlesBg from 'particles-bg';

import { motion } from 'framer-motion';

import { CgMouse } from 'react-icons/cg';

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: mode('#F7FAFC', '#171923')(props),
        color: mode('#171923', '#F7FAFC')(props),
      },
    }),
  },
});

const App = () => {
  const myRef = useRef(null);
  const MotionButton = motion.custom(IconButton);

  return (
    <ChakraProvider theme={theme}>
      <Box opacity={0.4}>
        <ParticlesBg bg={true} type="circle" num={4} size={10} />
      </Box>
      <Box>
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Box
          m="0 auto 0 auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxW="100%"
          h="100vh"
          position="relative"
        >
          <MotionButton
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            position="absolute"
            bottom="2%"
            icon={<CgMouse />}
            variant="none"
            fontSize="1.5rem"
            mx="auto"
            textAlign="center"
            onClick={() => myRef.current.scrollIntoView({ behavior: 'smooth' })}
          />
          <Box width="100%">
            <IntroSection pl={20} ml={10} pr={20} mr={10} textAlign="center" />
            <Navbar position="absolute" left="0" top="0" />
          </Box>
        </Box>
        <AboutMe scrollRef={myRef} />
        <Projects h="auto" pb="20" w="100%" />
        <Experience h="auto" pb="20" w="100%" />
        <Footer position="absolute" left="0" bottom="0" mb={5} />
      </Box>
    </ChakraProvider>
  );
};

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="3xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default App;
