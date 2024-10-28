import { useState } from "react";
import { BodyFon } from "../body/BodyFon.jsx";
import {
  CSSAppContainer,
  CSSAppBulls,
  CSSAppCows,
  CSSAppHeader,
  CSSAppNumberRead,
  CSSAppString,
  CSSAppNumpad,
} from "./styles/styles";
import { NumberPad } from "./components/numpad/NumberPad.jsx";

export const App = () => {
  const [number, setNumber] = useState("");
  const onAddNumber = (number) => setNumber((prev) => prev + number);
  // const onDropCount = () => setNumber("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
      }}
    >
      <BodyFon />
      <CSSAppContainer>
        <CSSAppHeader>{number}</CSSAppHeader>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CSSAppNumpad>
            <CSSAppString></CSSAppString>
            <NumberPad onAddNumber={onAddNumber} />
          </CSSAppNumpad>

          <CSSAppNumberRead>
            ЗДЕСЬ БУДУТ ЦИФРЫ, КОТОРЫЕ ВЫ ВВЕЛИ РАНЕЕ!
          </CSSAppNumberRead>
        </div>

        <CSSAppBulls>БЫКИ</CSSAppBulls>

        <CSSAppCows>КОРОВЫ</CSSAppCows>
      </CSSAppContainer>
    </div>
  );
};
