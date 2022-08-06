import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface NewPostModalProps {
  onClose: () => void;
}

const NewPostModal = ({ onClose }: NewPostModalProps) => {
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>content</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="outline">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewPostModal;
