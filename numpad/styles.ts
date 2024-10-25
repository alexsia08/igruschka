import styled from "@emotion/styled";

export const CSSButton = styled.button(function() {
    return {
        border:"1px solid white",
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        marginLeft: '35px',
        marginTop: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            backgroundColor: '#ffe294',
            transform: 'scale(1.1)',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.9)',
        },
        '&:active': {
            backgroundColor: '#75c3ff',
            transform: 'scale(1)',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        }
    }
})

export const CSSEnter = styled.button(function() {
    return {
        border:"1px solid white",
        width: '200px',
        height: '40px',
        borderRadius: '10px', 
        marginTop: '20px',
        marginLeft: '130px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            backgroundColor: '#ffe294',
            transform: 'scale(1.1)',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.9)',
        },
        '&:active': {
            backgroundColor: '#75c3ff',
            transform: 'scale(1)',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        }
    }
});