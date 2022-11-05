import { Btn } from "./Button.styled";

interface IButtonProps {
  onOpenModal: () => void;
}

function Button({ onOpenModal }: IButtonProps) {
  return (
    <Btn type="button" onClick={onOpenModal}>
      +
    </Btn>
  );
}

export default Button;
