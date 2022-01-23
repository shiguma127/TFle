import Header from "../components/Header";
import TFButton from "../components/TFButton";
import { Box, useDisclosure } from "@chakra-ui/react";
import Answer from "../components/Answer";
import { useState } from "react";
import { ButtonState } from "../types/ButtonState";
import { AnswerState } from "../types/AnswerState";
import ShareDialog from "../components/ShareDialog";

export default function Home() {
  const [TbtnState, setTbtnState] = useState<ButtonState>("unused");
  const [FbtnState, setFbtnState] = useState<ButtonState>("unused");
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [isGame, setIsGame] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = async (Input: boolean) => {
    setAttempts((prev) => prev + 1);
    if (await fetchAnswer(Input)) {
      Input ? setTbtnState("correct") : setFbtnState("correct");
      setAnswers((prev) => [...prev, { value: Input, isCorrect: true }]);
      setIsGame(true);
      onOpen();
    } else {
      Input ? setTbtnState("used") : setFbtnState("used");
      setAnswers((prev) => [...prev, { value: Input, isCorrect: false }]);
    }
  };
  const fetchAnswer = async (value: boolean) => {
    let response = false;
    await fetch("http://localhost:8787?answer=" + value)
      .then((response) => response.json())
      .then((data) => {
        response = data;
      });
    console.log(response);
    return response;
  };

  return (
    <div>
      <Header />
      <ShareDialog isOpen={isOpen} onClose={onClose} attempts={attempts} />
      <Box
        margin="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {answers.map((answer,index) => (
          <Answer
            value={answer.value}
            isCorrect={answer.isCorrect}
            key={answer.toString()+index}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" margin="10px">
        <TFButton
          value={true}
          state={TbtnState}
          onClick={() => handleClick(true)}
          disabled={isGame}
        />
        <TFButton
          value={false}
          state={FbtnState}
          onClick={() => handleClick(false)}
          disabled={isGame}
        />
      </Box>
    </div>
  );
}
