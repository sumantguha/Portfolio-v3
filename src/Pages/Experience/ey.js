import React from 'react';
import { Box, UnorderedList, ListItem, ModalBody } from '@chakra-ui/react';

const EY = () => {
  return (
    <Box mt={2}>
      <ModalBody>
        Exploring this neoteric technology-oriented world, I realize the power
        of algorithmic thinking is driving society. During the summer of 2019, I
        worked at Ernst & Young, where I combined algorithms and deep learning
        to develop a full-stack Tax FAQ Bot:
        <br />
        <br />
        <UnorderedList as="ul" px={10}>
          <ListItem>
            Worked on building supervised machine learning models for question
            answering tasks with dual attention LSTM models
          </ListItem>
          <ListItem>
            Member of a team that built a deep learning tax bot to facilitate
            tax advising. Trained & developed a model to answer internal tax
            related questions
          </ListItem>
          <ListItem>
            Created & maintained a platform for tax analytics and recommendation
            policies
          </ListItem>
        </UnorderedList>
        <br />
        Working long days and late nights, the experience I gained over summer
        prepared and enthralled me to live in this data-centric world:
        <br />
        <br />
        <UnorderedList as="ul" px={10}>
          <ListItem>
            I was exposed to multiple <strong>real-world problems</strong>: The
            idea of using technnology and softare for the betterment of
            community was brought out by examining the implications software had
            on society. Seeing the positive impact for someone using products we
            wrote transformed my motivation behind building codebases. It showed
            me how problems are solved at the intersection of technology and
            people
          </ListItem>
          <ListItem>
            I learned what it meant to be a <strong>"software engineer"</strong>{' '}
            in a business by deploying software and working in tandem with
            multiple teams: Every commit had to be thoroughly checked & ready
            for production, every idea had to be brainstormed within the team.
            This pipeline structure developed my understanding of tackling large
            problems and making sure that the best version of a product is
            shipped out to consumers.
          </ListItem>
        </UnorderedList>
      </ModalBody>
    </Box>
  );
};

export default EY;
