import styled from "@emotion/styled";

export const CSSButton = styled.button(function() {
    return {
        border:"1px solid white",
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        marginLeft: '35px',
        marginTop: '20px',
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
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        width: '150px',
        height: '40px',
        borderRadius: '10px', 
        marginTop: '20px',
        marginLeft: '50px',
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

export const CSSBackSpace = styled.button(function() {
    return {
        border:"1px solid white",
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        width: '150px',
        height: '40px',
        borderRadius: '10px', 
        marginTop: '20px',
        marginLeft: '60px',
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

export const CSSRestat = styled.button(function() {
    return {
        border: '5px solid white',
        fontSize: '15px',
        width: '35px',
        height: '35px',
        marginTop: '32px',
        marginLeft: '920px',
        borderRadius: '50px',
        transition: 'transform 0.2s ease', // Плавный переход
        '&:hover': {
            backgroundColor: '#ffe294',
            transform: 'rotate(180deg) scale(1.1)', // Вращение + увеличение
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.9)',
        },
        '&:active': {
            backgroundColor: '#75c3ff',
            transform: 'rotate(0deg) scale(1)', // Сброс вращения
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        }
    }
});
