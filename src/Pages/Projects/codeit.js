import React from 'react';
import {
  Box,
  UnorderedList,
  ListItem,
  ModalBody,
  Image,
  Button,
  Link,
  HStack,
  useColorModeValue,
  Code,
  Heading,
} from '@chakra-ui/react';

import { BsFileEarmarkCode } from 'react-icons/bs';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import CodeItLanding from '../../images/CodeItLanding.png';
import Settings from '../../images/Settings.png';
import SignUp from '../../images/SignUp.png';
import Courses from '../../images/Courses.png';
import Banner from '../../images/Banner.png';

const CodeIt = () => {
  const firstColor = useColorModeValue('red', 'yellow');
  return (
    <Box mt={2}>
      <ModalBody>
        <Button
          leftIcon={<FaGooglePlay />}
          colorScheme={firstColor}
          size="lg"
          mr={5}
        >
          <Link
            isExternal={true}
            _hover={{ textDecor: 'none' }}
            as="a"
            href="https://play.google.com/store/apps/details?id=com.trainthem"
            isExternal={true}
          >
            Download Now (PlayStore)
          </Link>
        </Button>
        <Button
          leftIcon={<FaAppStore />}
          colorScheme={firstColor}
          size="lg"
          mr={5}
        >
          <Link
            isExternal={true}
            _hover={{ textDecor: 'none' }}
            as="a"
            href="https://apps.apple.com/us/app/code-it/id1530425905"
            isExternal={true}
          >
            Download Now (App Store)
          </Link>
        </Button>
        <Button leftIcon={<BsFileEarmarkCode />} colorScheme="blue" size="lg">
          <Link
            _hover={{ textDecor: 'none' }}
            as="a"
            href="https://github.com/tusharpoddar/TrainThem"
            isExternal={true}
          >
            View Source Code
          </Link>
        </Button>
        <br />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Development Frameworks:
        </Heading>
        <Code children="React Native" mr={2} />
        <Code children="Java" mr={2} />
        <Code children="Swift" />
        <br />
        <Heading display="inline-block" mr={2} size="sm">
          Design Frameworks:
        </Heading>
        <Code children="Figma" />
        <br />
        <br />
        Starting to explore the neoteric world of web design and app
        development, I wanted to create content that was not only interesting
        but also aligned with my goals of improving computer science pedagogy
        and inclusivity through a school level.{' '}
        <b>
          <i>Code.it</i>
        </b>{' '}
        was born from this vision of augmenting the level of computational
        education, deployed to empower underprivileged students by providing
        free CS education. The app is targeted towards middle & high schoolers
        offering courses in multiple programming languages (Python, Java, HTML,
        CSS, JavaScript). We are unique and differentiate ourselves from other
        platforms like KhanAcademy, Coursera, edX by:
        <br />
        <br />
        <UnorderedList pl={10}>
          <ListItem>
            Working specifically with less fortunate schools to promote computer
            science specific learning
          </ListItem>
          <ListItem>
            Providing <i>free</i> computer science education with a 24 hour
            continuous form
          </ListItem>
          <ListItem>
            Lectures are <i>live</i> with an instructor for specific student
            groups
          </ListItem>
        </UnorderedList>
        <br />
        Our design principles were focused on simplicity, but have important
        interactive elements that hook users and keep them interested in the
        flow. Almost designed in React Native, this app supports cross platform
        use and hence increases access for everyone.
        <HStack maxW="25%" mt={5}>
          <Image src={CodeItLanding} />
          <Image src={Settings} />
          <Image src={SignUp} />
          <Image src={Courses} />
        </HStack>
        <Image mx="auto" mt={10} maxW="60%" src={Banner} />
      </ModalBody>
    </Box>
  );
};

export default CodeIt;
