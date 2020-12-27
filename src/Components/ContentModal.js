import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';

import TA from '../Pages/Experience/ta';
import EY from '../Pages/Experience/ey';
import CodeIt from '../Pages/Projects/codeit';
import Webapps from '../Pages/Projects/webapps';

const pageHandler = {
  'CSE 14x Head Teaching Assistant': <TA />,
  'Machine Learning Intern': <EY />,
  'Code.it': <CodeIt />,
  'Nifty Web Apps': <Webapps />,
};

const ContentModal = ({
  props,
  onClose,
  isOpen,
  title,
  description,
  start,
  end,
}) => {
  return (
    <Modal
      {...props}
      onClose={onClose}
      size="6xl"
      isOpen={isOpen}
      justifyContent="center"
      alignItems="center"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="5xl" fontWeight={700}>
          {title}
          <Text
            fontSize="md"
            textTransform="uppercase"
            letterSpacing="0.2rem"
            mt={1}
          >
            {description === undefined ? '' : `${description} |`} {start}{' '}
            {end === null ? '' : `- ${end}`}
          </Text>
        </ModalHeader>
        <Divider colorScheme="blue" orientation="horizontal" />

        <ModalCloseButton />
        <ModalBody fontWeight={400}>{pageHandler[title]}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContentModal;
