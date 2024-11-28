import styled from "@emotion/styled";

export const HistoryContainer = styled.div({
    display: 'flex',
    flexWrap: 'wrap', // Allow child items to wrap onto the next row/column
    gap: '10px', // Optional: Add space between items
});

export const AddLi = styled.li({
    listStyle: 'circle',
    fontFamily: 'Times New Roman, Georgia, Garamond, serif',
    fontSize: '20px',
});

export const Paragraf = styled.p({
    fontFamily: 'Times New Roman, Georgia, Garamond, serif',
    fontSize: '20px',
    textAlign: 'center',
})