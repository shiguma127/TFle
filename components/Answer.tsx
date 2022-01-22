import { Box, Flex, Text } from "@chakra-ui/react";
import { AnswerState } from "../types/AnswerState";

const Answer: React.VFC<AnswerState> = (props) => {
  return (
    <Flex>
      <Box
        backgroundColor={props.isCorrect ? "green.500" : "gray"}
        width="15vh"
        height="15vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin="5px"
      >
        <Text color="white" fontSize="6xl">
          {props.value.toString()}
        </Text>
      </Box>
    </Flex>
  );
};

export default Answer;
