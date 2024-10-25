import React from "react";
import { CSSButton, CSSEnter } from "./styles"; // Похоже, что CSSButton не используется в коде

export const NumberPad = () => {
    return (
        <>
            <div>
                <CSSButton>0</CSSButton>
                <CSSButton>1</CSSButton>
                <CSSButton>2</CSSButton>
                <CSSButton>3</CSSButton>
                <CSSButton>4</CSSButton>
                <CSSButton>5</CSSButton>
                <CSSButton>6</CSSButton>
                <CSSButton>7</CSSButton>
                <CSSButton>8</CSSButton>
                <CSSButton>9</CSSButton>
            </div>
            <div>
                <CSSEnter>Ввести</CSSEnter>
            </div>
        </>
    );
}