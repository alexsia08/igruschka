import React, { useState, useEffect } from "react";
import { BodyFon } from "./body/bodyFon";
import { CSSAppContainer, CSSAppBulls, CSSAppCows, CSSAppHeader, CSSAppNumberRead, CSSAppString, CSSAppNumpad, CSSCircle, CSSCircleOne, CSSLi } from './styles/styles';
import { NumberPad } from "./numpad/NumberPad";
import { CSSEnter, CSSRestat, CSSBackSpace} from "./numpad/styles";
import { Modal } from "./modal/Modal";
import { ErrorModal } from "./modal/ErrorModal";
import { ErrorModal1 } from "./modal/ErrorModal1";

export const App = () => {
  const [version, setVersion] = useState(0);
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const [randomDigits, setRandomDigits] = useState([]); // Рандом
  const [bulls, setBulls] = useState(0); // Быки
  const [cows, setCows] = useState(0); // Коровы

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ErrorModalOpen, setErrorModalOpen] = useState(false);
  const [ErrorModalOpen1, setErrorModalOpen1] = useState(false);

  // Генерация рандомного числа
  const generateRandomDigits = () => {
    let numberRandom = [];
    let i = 0;
    while (i < 4) {
      let r = parseInt(Math.random() * 10);
      if (numberRandom.includes(r)) {
        continue;
      }
      numberRandom.push(r);
      i++;
    }
    setRandomDigits(numberRandom);
    console.log('Загадано число: ', numberRandom.join(''));
  };

  useEffect(() => {
    generateRandomDigits();
  }, []); 

  // Рестарт
  function handelReset() {
    setVersion(version + 1);
    setNumber("");
    setNumbers([]);
    setBulls(0);
    setCows(0);
    generateRandomDigits(); 
  }

  // Ввод цифр
  const onAddNumber = (digit) => {
    if(number.length < 4) {
      setNumber((prev) => prev + digit);
    }else{
      setErrorModalOpen1(true);
    }
  }

  // Стереть
  const handleBackSpace = () => {
    setNumber((prev) => prev.slice(0, -1));
  }

  // Ввод и запись числа в историю
  const onAddEnter = () => {
    if (number.length === 4) {
      // Подсчет быков и коров
      let tempBulls = 0;
      let tempCows = 0;
      const guessArray = number.split('').map(Number);
      
      // Проверяем быков (точные совпадения позиции и значения)
      for (let i = 0; i < 4; i++) {
        if (guessArray[i] === randomDigits[i]) {
          tempBulls++;
        }
      }
      
      // Проверяем коров (совпадения значений без учета позиции)
      for (let i = 0; i < 4; i++) {
        if (randomDigits.includes(guessArray[i]) && guessArray[i] !== randomDigits[i]) {
          tempCows++;
        }
      }
      
      setBulls(tempBulls);
      setCows(tempCows);
      
      // Добавляем число в историю
      setNumbers((prevNumbers) => [...prevNumbers, {
        number: number, 
        bulls: tempBulls, 
        cows: tempCows
      }]);
      setNumber('');
      
      // Проверка на победу
      if (tempBulls === 4) {
        setIsModalOpen(true);
      }} else {
        setErrorModalOpen(true);
      }
    };

  const History = ({ numbers }) => {
    return (
      <div style={{maxHeight: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
        <ul>
        {numbers.map((item, index) => (
          <CSSLi key={index}>
              {item.number} (Быки: {item.bulls}, Коровы: {item.cows})   
          </CSSLi>
        ))}
        </ul>
      </div>
    );
  };

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '97vh' }}> 
      <BodyFon />
      <CSSAppContainer>

        <Modal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onNewGame={() => {
              handelReset();
              setIsModalOpen(false);
          }}
        />

        <ErrorModal 
            isOpen={ErrorModalOpen}  
            onClose={() => setErrorModalOpen(false)}
        />

        <ErrorModal1 
            isOpen={ErrorModalOpen1}
            onClose={() => setErrorModalOpen1(false)}
        />

        <div>
          <CSSAppHeader>
            <CSSRestat onClick={handelReset}>{String.fromCodePoint(0x27F3)}</CSSRestat>
            <CSSCircle />
            <CSSCircleOne />
          </CSSAppHeader>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
          <CSSAppNumpad>
            <CSSAppString>{number}</CSSAppString>
            <NumberPad onAddNumber={onAddNumber}/>
            <CSSBackSpace onClick={handleBackSpace}>Стереть</CSSBackSpace> 
            <CSSEnter onClick={onAddEnter}>Ввести</CSSEnter>  
          </CSSAppNumpad>

          <CSSAppNumberRead>
            <History numbers={numbers} /> 
          </CSSAppNumberRead>
        </div>

        <CSSAppBulls>Быков: {bulls}</CSSAppBulls>
        <CSSAppCows>Коров: {cows}</CSSAppCows>
      </CSSAppContainer>     
    </div>
}