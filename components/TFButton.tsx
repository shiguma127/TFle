import { Button, ButtonProps } from "@chakra-ui/react";
import { ButtonState } from "../types/ButtonState";

type TFButtonProps = Pick<ButtonProps, "disabled" | "onClick"> & {
  value: boolean;
  state: ButtonState;
};

type ColorProps = {
  gray: ButtonProps;
  green: ButtonProps;
  black: ButtonProps;
};

const colorProps: ColorProps = {
  gray: {
    colorScheme: "gray",
  },
  green: {
    colorScheme: "green",
  },
  black: {
    backgroundColor: "#696969",
    color: "white",
  },
};

const stateToColor = {
  unused: "gray",
  correct: "green",
  used: "black",
};

const TFButton: React.VFC<TFButtonProps> = (props) => (
  <Button
    disabled={props.disabled}
    size="lg"
    onClick={props.onClick}
    margin="5px"
    {...colorProps[stateToColor[props.state]]}
  >
    {props.value.toString()}
  </Button>
);

export default TFButton;
