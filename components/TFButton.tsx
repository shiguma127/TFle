import { Button } from "@chakra-ui/react";
import { ButtonState } from "../types/ButtonState";
type TFButtonProps = {
  value: boolean;
  state: ButtonState;
  disabled: boolean;
  onClick: () => void;
};

const TFButton: React.VFC<TFButtonProps> = (props) => {
  const TFButtons = {
    gray: (
      <Button
        disabled={props.disabled}
        colorScheme="gray"
        size="lg"
        onClick={props.onClick}
        margin="5px"
      >
        {props.value.toString()}
      </Button>
    ),
    green: (
      <Button
        disabled={props.disabled}
        colorScheme="green"
        size="lg"
        onClick={props.onClick}
        margin="5px"
      >
        {props.value.toString()}
      </Button>
    ),
    black: (
      <Button
        disabled={props.disabled}
        backgroundColor="#696969"
        color="white"
        size="lg"
        onClick={props.onClick}
        margin="5px"
      >
        {props.value.toString()}
      </Button>
    ),
  };
  const btn = () => {
    switch (props.state) {
      case "used":
        return TFButtons.black;
      case "unused":
        return TFButtons.gray;
      case "correct":
        return TFButtons.green;
    }
  };
  return btn();
};

export default TFButton;
