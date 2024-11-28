import React from "react";

export const Modal = ({ isOpen, onClose, onNewGame }) => {
    if (!isOpen) return null;
    
    return (
        <div 
            style={{
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontFamily: 'Times New Roman, Georgia, Garamond, serif',
                    fontSize: '15px',
                }}
            >
                <h2>Поздравляем!</h2>
                <p>Вы угадали число!</p>
                <button 
                    onClick={() => {
                        onClose();
                        onNewGame();
                    }}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                        cursor: 'pointer',
                        fontFamily: 'Times New Roman, Georgia, Garamond, serif',
                        fontSize: '15px',
                    }}
                >
                    Начать новую игру
                </button>
            </div>
        </div>
    );
};
