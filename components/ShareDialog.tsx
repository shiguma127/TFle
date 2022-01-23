import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/modal";
import React from "react";
import urlGenerater from "../src/TwitterShareUrlGenerater";

type ShareDialogProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  attempts: number;
};

const ShareDialog: React.VFC<ShareDialogProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Congratulation🎉</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column">
            <Text>{`You got the correct answer in ${props.attempts} guesses.`}</Text>
            <Button
              colorScheme="twitter"
              leftIcon={<FaTwitter />}
              marginTop="20px"
              onClick={() => window.open(urlGenerater(props.attempts))}
            >
              Share on Twitter
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default ShareDialog;
