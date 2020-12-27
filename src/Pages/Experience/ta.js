import {
  Box,
  UnorderedList,
  ListItem,
  ModalBody,
  Image,
  ModalHeader,
} from '@chakra-ui/react';
import React from 'react';
import ta from '../../images/TA.jpg';

const TA = () => {
  return (
    <Box mt={2}>
      <ModalBody>
        The introductory CS series was my initiation to structured programming
        as a means to explore the world of computing. I was immediately drawn to
        concepts of algorithmic thinking and the rigorous underlying
        mathematics. I decided to share my love for computation by working as a
        teaching assistant for the CSE 14x community, a class that serves as a
        stepping-stone into the new world of programming. It was the greatest
        experience through my time in college and is the reason I am so
        passionate about promoting computational literacy & inclusive education.
        My responsabilities include:
        <br />
        <br />
        <UnorderedList as="ul" px={10}>
          <ListItem>
            Teaching topics ranging from basic programming to data structure
            implementations & algorithms
          </ListItem>
          <ListItem>
            Lead weekly recitation sections with around 25 students
          </ListItem>
          <ListItem>
            Worked at introductory programming lab, open to more than 800
            students enrolled in the introductory series
          </ListItem>
          <ListItem>Graded 800+ student midterms & final exams</ListItem>
        </UnorderedList>
        <br />I gained invaluable skills & qualities by working with unparalled
        faculty and a tight-knit community.
        <br />
        <br />
        <UnorderedList as="ul" px={10}>
          <ListItem>
            I learned <strong>leadership</strong> skills: Teaching a class of 25
            students brought out a plethora of challenges. It was a big
            responsability that I had to take on, and I was thrilled to be part
            of this bigger community through which I could make a difference and
            impact the class that I loved. Progressing as a TA, I was tasked
            with backreading (checking over other TAs grading and deciding
            grading critera). I spent close to 20 hours a week answering
            questions from other TAs, checking and rechecking every point. I
            then worked with instructors to manage the migration the entire
            codebase into new platforms and developed new tools for homework
            autograders and server side networks.
          </ListItem>
          <ListItem>
            This created opportunities to <strong>prioritize</strong> and better
            my <strong>time management</strong>: Working on high impact projects
            with faculty, teaching, backreading & taking my own classes all the
            while brought into perspective what it means for 25+ students to
            rely on me. Breaking up large tasks into manageable bits as well as
            prioritizing high value tasks helped me be a dedicated TA and a
            student
          </ListItem>
          <ListItem>
            <strong>Communication</strong> ended up being the biggest takeway
            for me: Each week, I had about 5 hours of meetings (& section) that
            I has to present to. Explaining difficult concepts, problems &
            solutions started off as a big challenge but making good use of the
            resources avaialable to me really helped me break through the
            barrier. Communication has stuck with me as I start interviewing for
            internships and full time jobs in industry, by breaking down large
            problems and thinking through them step by step
          </ListItem>
          <ListItem>
            Being part of one of the most tight knight and amazing{' '}
            <strong>community</strong> has given me friends for life. Getting to
            know other TAs and instructors personally has been such a rewarding
            experience. From just knowing TAs through classes and meeting them a
            couple times a week, our community has progressed to hours of
            complaining in the library, catching up over pizza parties, game
            nights & going on adventures!
          </ListItem>
        </UnorderedList>
      </ModalBody>
      <Image mt={10} mx="auto" src={ta} maxW="40%" />
    </Box>
  );
};

export default TA;
