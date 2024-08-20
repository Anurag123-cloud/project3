import ChooseNumber from "./ChooseNumber"
import DiceImg from "./DiceImg"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react";
import Rules from "./Rules";
const PlayGame = () => {
  const [selectNumber, setselectNumber]=useState();
  const[CurrentDice, setCurrentDice]=useState(1)
  const[score, setScore]=useState(0)
  const[Error, setError]=useState()
  const[showRules, setShowRule]=useState()
  const generatedRandomDice=(min ,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  }
  
  const RoleDice=()=>{
    if(!selectNumber){
      setError("You have not selected any number")
      return;
    }
   const RandomDice=generatedRandomDice(1,7);
    setCurrentDice((prev)=>RandomDice);
 
    if(selectNumber===RandomDice){
      setScore((prev)=>prev+1)
    }else{
      setScore((prev)=>prev-1)
     
    }
    setselectNumber(undefined);
  }

  const restScore=()=>{
    setScore(0);
  }

  // const showRules=()=>{
    
  // }

  
  return (
    <Container>
       
     <Header>
       <TotalScore score={score}/>
       <ChooseNumber setError={setError} Error={Error} selectNumber={selectNumber} setselectNumber={setselectNumber}  />
     </Header>
     <DiceImg CurrentDice={CurrentDice} RoleDice={RoleDice} />
     
     
     <div className="btn">
        <Button2 onClick={restScore}>Reset Score</Button2><br/>
        <Button
        onClick={()=>{ setShowRule((prev)=>!prev)         
        }}
        >{setShowRule ? "Show":"Hide"} Rules</Button>
        
     </div>

     {showRules && <Rules/>}
     
    
    </Container>
  )
}

export default PlayGame



const Header=styled.div`
    display:flex;
     justify-content: space-between;
         align-items: center;

`;
const Container=styled.div`
    max-width: 1100px;
    margin: 40px auto;
    .btn{
    text-align:center;
    
    }
    Button{
    margin-top:20px
    }

`;

const Button=styled.button`
    background-color: black;
    color: #fff;
    padding: 10px 49px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 11px;
    border: 1px solid transparent;
    transition: 0.5s background ease-in;
    &:hover{
    background-color: white;
    color:black;
    border: 1px solid #000;
    transition: 0.5s background ease-in;
    }`

    const Button2=styled.button`
    background-color: white;
    color: #000;
    padding: 10px 49px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 11px;
    border: 1px solid #000;
    transition: 0.5s background ease-in;
    &:hover{
    background-color: black;
    color:white;
   
    transition: 0.5s background ease-in;
    
    }`