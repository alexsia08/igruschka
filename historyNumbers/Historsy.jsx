import React from "react";
import { HistoryContainer, AddLi, Paragraf } from "./style";

export const History = ({ numbers }) => {
    return (
        <HistoryContainer>
            {numbers.length > 0 ? (
                <ul>
                        {numbers.map((number, index) => (
                            <AddLi key={index}>{number}</AddLi>
                        ))}
                </ul>
            ) : (
                <Paragraf>История пуста.</Paragraf>
            )}
        </HistoryContainer>
    );
};
