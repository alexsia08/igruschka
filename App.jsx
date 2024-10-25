import React from "react";
import { BodyFon } from "./body/bodyFon";
import { CSSAppContainer, CSSAppBulls, CSSAppCows, CSSAppHeader, CSSAppNumberRead, CSSAppString, CSSAppNumpad } from './styles/styles';
import { NumberPad } from "./numpad/NumberPad";

export const App = () => {
  // const numberList = [
  //   {
  //     number:1,
  //     onClick:() => {}
  //   },
  //   {
  //     number:2,
  //     onClick:() => {}
  //   },
  // ]


  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '97vh' }}> 
      <BodyFon />
      <CSSAppContainer>
        <CSSAppHeader></CSSAppHeader>

        <div style={{display:"flex", justifyContent:"space-between"}}>
          <CSSAppNumpad>
            <CSSAppString></CSSAppString>
            {
              <NumberPad />
            }
          </CSSAppNumpad>

          <CSSAppNumberRead>ЗДЕСЬ БУДУТ ЦИФРЫ, КОТОРЫЕ ВЫ ВВЕЛИ РАНЕЕ!</CSSAppNumberRead>
        </div>

        <CSSAppBulls>БЫКИ</CSSAppBulls>
        
        <CSSAppCows>КОРОВЫ</CSSAppCows>
      </CSSAppContainer>     
    </div>
}