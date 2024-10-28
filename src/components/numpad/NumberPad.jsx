import { CSSButton } from "./styles"; // Похоже, что CSSButton не используется в коде

export const NumberPad = ({ onAddNumber }) => {
  return Array(10)
    .fill()
    .map((_, index) => (
      <CSSButton key={index} onClick={() => onAddNumber(String(index))}>
        {index}
      </CSSButton>
    ));
};
