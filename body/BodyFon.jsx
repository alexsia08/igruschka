import React from "react";
import fon from './fon.jpg';

export const BodyFon = () => {
    const bodyFonStyle ={
        backgroundImage: `url(${fon})`, // Загрузка фона
        backgroundSize: 'cover', // не повторяет картинку
        position: 'absolute', // точное расположение картинки на странице
        width: '100%', // ширина
        height: '100%', // высота
        top: 0, // отступы
        left: 0, // отступы
        zIndex:-1
        };
    
    return (
        <div id="fon" style={bodyFonStyle}></div>
    );
};

