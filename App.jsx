import React, { useState } from "react";
import { BodyFon } from "./body/bodyFon";
import { CSSAppContainer, CSSAppBulls, CSSAppCows, CSSAppHeader, CSSAppNumberRead, CSSAppString, CSSAppNumpad, CSSCircle, CSSCircleOne } from './styles/styles';
import { NumberPad } from "./numpad/NumberPad";
import { CSSEnter, CSSRestat, CSSBackSpace} from "./numpad/styles";


export const App = () => {
  const [version, setVersion] = useState(0);
  function handelReset() {
    setVersion(version + 1);
    setNumber("");
  }

  const [number, setNumber] = useState("");
  const onAddNumber = (digit) => {
    if(number.length < 4) {
      setNumber((prev) => prev + digit);
    }else{
      alert("Максимум 4 цифры!");
    }
  }

  const handleBackSpace = () => {
    setNumber((prev) => prev.slice(-1, -1));
  }

  const [InputValue, setInputValue] = useState('');
  const onAddEnter = () => {
    alert(`Вы ввели: ${number}`);
    setNumber('');
  }

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '97vh' }}> 
      <BodyFon />
      <CSSAppContainer>
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

          <CSSAppNumberRead>ЗДЕСЬ БУДУТ ЦИФРЫ, КОТОРЫЕ ВЫ ВВЕЛИ РАНЕЕ!</CSSAppNumberRead>
        </div>

        <CSSAppBulls>БЫКИ</CSSAppBulls>
        
        <CSSAppCows>КОРОВЫ</CSSAppCows>
      </CSSAppContainer>     
    </div>
}
