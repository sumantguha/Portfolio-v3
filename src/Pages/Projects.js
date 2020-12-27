import React from 'react';
import { Box, SimpleGrid, Center, Image } from '@chakra-ui/react';
import tt from '../images/tt.svg';
import webapps from '../images/webapps.svg';
import gradeit from '../images/gradeit.svg';
import maps from '../images/maps.svg';
import insurance from '../images/insurance.svg';
import message from '../images/message.svg';
import portfolio1 from '../images/portfolio1.svg';
import portfolio2 from '../images/portfolio2.svg';

import Header from '../Components/Header';
import Card from '../Components/Card';

const Projects = props => {
  return (
    <Box {...props}>
      <Header description="case studies" title="Projects" />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          justifyContent="center"
          alignItems="center"
          columns={{ sm: 1, md: 2 }}
          px="20"
          pt="10"
          maxW="100%"
          mx="auto"
        >
          <Card
            mr={20}
            mb={20}
            name="Code.it"
            description="HighSchool Education Platform"
            start="2020"
            end="Present"
            image={tt}
            size="4xl"
            height={500}
            descriptionSize="lg"
            newPost={true}
          />

          <Card
            mr={20}
            mb={20}
            name="Nifty Web Apps"
            description="Build web apps for any programming assignment"
            start="2020"
            end="Present"
            image={webapps}
            size="4xl"
            height={500}
            descriptionSize="lg"
            newPost={true}
          />
        </SimpleGrid>

        <SimpleGrid columns={{ sm: 1, md: 3 }} px="20" maxW="100%">
          <Card
            mr={5}
            mb={5}
            name="Java Code Quality Linter"
            description="Web/Text Checker"
            start="2020"
            end="Present"
            image={insurance}
            size="2xl"
            height={500}
            descriptionSize="md"
            newPost={true}
          />

          <Card
            mr={5}
            mb={5}
            name="Course Data Migration"
            description="Writing jUnit tests"
            start="2020"
            end="Present"
            image={gradeit}
            size="2xl"
            height={500}
            descriptionSize="md"
          />

          <Card
            mr={5}
            mb={5}
            name="Husky Maps"
            description="Interactive Map Viz"
            start="2019"
            end="2020"
            image={maps}
            size="2xl"
            height={500}
            descriptionSize="md"
          />

          <Card
            mr={5}
            mb={5}
            name="Talkly"
            description="Reactive Message Platform"
            start="2020"
            end="Present"
            image={message}
            size="2xl"
            height={500}
            descriptionSize="md"
          />

          <Card
            mr={5}
            mb={5}
            name="Portfolio version 2"
            description="My old portfolio website"
            start="2020"
            end="Present"
            image={portfolio1}
            size="2xl"
            height={500}
            descriptionSize="md"
          />

          <Card
            mr={5}
            mb={5}
            name="Portfolio version 1"
            description="My old portfolio website"
            start="2019"
            end="2020"
            image={portfolio2}
            size="2xl"
            height={500}
            descriptionSize="md"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
