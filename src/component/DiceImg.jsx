import { useState } from "react"
import styled from "styled-components"

const DiceImg = ({CurrentDice, RoleDice }) => {  




  return (
    <div>
        <Contain onClick={RoleDice}>
        <img src={`/dice_${CurrentDice}.png`} alt=""/>
        </Contain>
        <Instrution>Click on Dice to roll</Instrution>
        
    </div>
  )
}

export default DiceImg

const Contain=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
     margin: 60px 0 33px 0;
     cursor: pointer;
`

const Instrution=styled.p`
display: flex;
justify-content: center;
margin: 0;
font-size: 22px;
font-weight: bold;
`



