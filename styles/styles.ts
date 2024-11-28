import styled from '@emotion/styled'
// import fon from '../body/fon.jpg';

export const CSSAppContainer = styled.div(function() {
    return {
        // border: '5px solid black',
        backgroundColor: '#ffe294',
        borderRadius: '50px',
        width: '1000px',
        height: '650px',
    }
})

export const CSSAppHeader = styled.div(function() { // шапка
    return {
        // border: '5px solid black',
        backgroundColor: '#75c3ff',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
        width: '1000px',
        height: '100px',
    }
})

export const CSSAppNumberRead = styled.div(function() { // для хранения цифр
    return {
        // border: '5px solid black',
        backgroundColor: 'white',
        borderBottomRightRadius: '50px',
        width: '460px',
        height: '500px',
        marginRight: '30px',
        marginTop: '25px',
    }
})

export const CSSAppString = styled.div(function() { // экран куда вводятся цифры
    return {
        // border: '5px solid black',
        borderRadius: '50px',
        backgroundColor: '#75c3ff',
        width: '405px',
        height: '50px',
        marginLeft: '28px',
        marginTop: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '40px',
        textAlign: 'center',
    }
})

export const CSSAppNumpad = styled.div(function() { // клавиатура
    return {
        // border: '5px solid black',
        borderRadius: '50px',
        backgroundColor: 'white',
        width: '460px',
        height: '300px',
        marginLeft: '27px',
        marginTop: '80px',
        // marginLeft: '-460px'
    }
})

export const CSSAppBulls = styled.div(function() { // Быки
    return {
        // border: '5px solid black',
        borderRadius: '50px',
        backgroundColor: 'white',
        width: '170px',
        height: '50px',
        marginLeft: '80px',
        marginTop: '-124px',
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const CSSAppCows = styled.div(function() { // Коровы
    return {
        // border: '5px solid black',
        borderRadius: '50px',
        backgroundColor: 'white',
        width: '170px',
        height: '50px',
        marginLeft: '270px',
        marginTop: '-50px',
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const CSSCircle = styled.div(function() {
    return{
        // border: '5px solid black',
        backgroundColor: 'white',
        borderRadius: '50px',
        width: '35px',
        height: '35px',
        marginTop: '-35px',
        marginLeft: '875px',
    }
})

export const CSSCircleOne = styled.div(function() {
    return{
        // border: '5px solid black',
        backgroundColor: 'white',
        borderRadius: '50px',
        width: '35px',
        height: '35px',
        marginTop: '-35px',
        marginLeft: '830px',
    }
})

export const CSSLi = styled.li(function() {
    return{
        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
        fontSize: '20px',
        listStyleType: 'none',
        textAlign: 'center',
        marginRight: '50px',
        marginTop: '5px'
    }
})
