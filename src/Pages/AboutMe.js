import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../Components/Header';

import workingLight from '../images/workingLight.svg';
import workingDark from '../images/workingDark.svg';

const AboutMe = ({ props, scrollRef }) => {
  const image = useColorModeValue(workingLight, workingDark);
  return (
    <Box w="100%" ref={scrollRef} {...props}>
      <SimpleGrid h="100vh" pt="20" columns={{ sm: 1, md: 2 }} spacing={10}>
        <Box>
          <Header description="learn more" title="About Me" />
          <Text
            marginLeft="20"
            mt="10"
            maxW="80%"
            fontSize="lg"
            fontWeight={300}
          >
            Hello! I'm Sumant, a 20 year old undergraduate student based out of
            Seattle, Washington. Welcome to my slice of the web 😀 <br /> <br />
            I am a junior studying electrical and computer engineering at the
            University of Washington. Passionate about promoting inclusive
            education and computational literacy, I work as a head teaching
            assistant at the Paul G Allen School of Computer Science and
            Engineering for the introductory computer science series. Teaching
            has been one of the rewarding part of my college experience yet!
            <br /> <br /> I work on a variety of projects across multiple
            platforms such as: Python, React, Java, ReactNative, JavaScript,
            HTML, CSS and C++. Take a look at some of my projects below to see
            my work 💻
          </Text>
        </Box>
        <Center marginRight="20" maxW="80%" maxH="80%">
          <Image src={image} />
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMe;
