import Header from "../components/Header";
import TFButton from "../components/TFButton";
import { Box } from "@chakra-ui/react";
import Answer from "../components/Answer";
import { useState } from "react";
import { ButtonState } from "../types/ButtonState";
import { AnswerState } from "../types/AnswerState";

export default function Home() {
  const [TbtnState, setTbtnState] = useState<ButtonState>("unused");
  const [FbtnState, setFbtnState] = useState<ButtonState>("unused");
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [isGame, setIsGame] = useState<boolean>(false);

  const handleTbtnClick = async () => {
    //答えがtrueだったら
    if (await fetchAnswer(true)) {
      setTbtnState("correct");
      setAnswers((prev) => [...prev, { value: true, isCorrect: true }]);
      setIsGame(true);
    } else {
      setTbtnState("used");
      setAnswers((prev) => [...prev, { value: true, isCorrect: false }]);
    }
  };
  const handleFbtnClick = async () => {
    //答えがfalseだったら
    if (await fetchAnswer(false)) {
      setFbtnState("correct");
      setAnswers((prev) => [...prev, { value: false, isCorrect: true }]);
      setIsGame(true);
    } else {
      setFbtnState("used");
      setAnswers((prev) => [...prev, { value: false, isCorrect: false }]);
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
      <Box
        margin="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {answers.map((answer) => (
          <Answer
            value={answer.value}
            isCorrect={answer.isCorrect}
            key={answer.toString()}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" margin="10px">
        <TFButton
          value={true}
          state={TbtnState}
          onClick={handleTbtnClick}
          disabled={isGame}
        />
        <TFButton
          value={false}
          state={FbtnState}
          onClick={handleFbtnClick}
          disabled={isGame}
        />
      </Box>
    </div>
  );
}
