import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from '../Components/Header';
import Card from '../Components/Card';

import ta from '../images/teaching.svg';
import ey from '../images/ml.svg';
import robot from '../images/r.svg';
import data from '../images/data.svg';

const Experience = props => {
  return (
    <Box {...props}>
      <Header description="where i've worked" title="Work Experience" />
      <Flex
        justifyContent="center"
        alignItems="center"
        columns={{ sm: 1, md: 2 }}
        px="20"
        pt="10"
        maxW="100%"
        mx="auto"
        flexWrap="wrap"
      >
        <Card
          mr={20}
          mb={20}
          name="CSE 14x Head Teaching Assistant"
          start="2020"
          end="Present"
          description="University of Washington"
          image={ta}
          size="5xl"
          height={700}
          descriptionSize="xl"
        />
        <Card
          mb={20}
          name="Machine Learning Intern"
          start="2019"
          end={null}
          description="Ernst & Young"
          image={ey}
          size="5xl"
          height={700}
          descriptionSize="xl"
        />

        <Card
          mr={20}
          mb={20}
          name="Embedded Systems Programmer"
          start="2018"
          end="2019"
          description="Husky Robotics"
          image={robot}
          size="5xl"
          height={700}
          descriptionSize="xl"
        />
        <Card
          mb={20}
          name="Data Analytics Intern"
          start="2018"
          end={null}
          description="Mu Sigma"
          image={data}
          size="5xl"
          height={700}
          descriptionSize="xl"
        />
      </Flex>
    </Box>
  );
};

export default Experience;
