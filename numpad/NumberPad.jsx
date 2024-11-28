import React from "react";
import { CSSButton } from "./styles";

export const NumberPad = ({ onAddNumber }) => {
    return Array(10).fill().map((_, index) => (
        <CSSButton key={index} onClick={() => onAddNumber(String(index))}>
            {index}
        </CSSButton>
    ));
};
